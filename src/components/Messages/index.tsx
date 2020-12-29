import React, {ReactText, useCallback, useEffect, useRef, useState,} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	changeWSstatus,
	getOnlineUsers,
	messageCreate,
	messageEdit,
	messageGetAll,
	messageRemove,
	typing,
	userAreDisconnected,
} from '../../actions/Messages';
import {MessageActions} from '../../actions/Messages/interface';
import {wsConnected, wsConnecting, wsConnectionError,} from '../../actions/Websocket';
import {IRootState} from '../../reducers';

import {IInitialMessagesState} from '../../reducers/Messages';
import {IUsersInitialState} from '../../reducers/Users';
import {IWSinitialState} from '../../reducers/Websocket';
import {getAccessToken, setFocus} from '../../utils';
import './Messages.scss';
import {websocketRoute} from "../../api/routes";

const MessagesView: React.FC = () => {
	const wsRef = useRef<WebSocket | null>(null);
	const [state, setState] = useState({content: '', id: 0});
	const dispatch = useDispatch();
	const {allMessages, activeUsers} = useSelector<IRootState,
		IInitialMessagesState
	>((state) => state.messages);
	const { wsState } = useSelector<IRootState, IWSinitialState>(
		(state) => state.websocketState,
	);
	const { user } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	const { who_type } = useSelector<IRootState, IInitialMessagesState>(
		(state) => state.messages,
	);
	const [editing, setEditing] = useState(false);
	const setUpWs = useCallback(
		(ws: WebSocket) => {
			dispatch(wsConnecting());
			ws.onopen = () => {
				dispatch(wsConnected());
				dispatch(changeWSstatus(MessageActions.WS_CONNECTED));
				const token = getAccessToken();
				ws.send(
					JSON.stringify({
						type: MessageActions.NEW_USER_ONLINE,
						token,
					}),
				);
				ws.send(
					JSON.stringify({ type: MessageActions.GET_ALL_MESSAGES, token }),
				);
				wsRef.current = ws;
			};
			ws.onmessage = async (evt) => {
				const data = JSON.parse(evt.data);
				console.log(data);

				switch (data.type) {
					case MessageActions.GET_ALL_MESSAGES:
						dispatch(messageGetAll(data.messages));
						return;
					case MessageActions.REMOVE_MESSAGE:
						dispatch(messageRemove(data.id));
						return;
					case MessageActions.EDIT_MESSAGE:
						dispatch(messageEdit(data.message));
						return;
					case MessageActions.CREATE_MESSAGE:
						dispatch(messageCreate(data.message));
						return;
					case MessageActions.NEW_USER_ONLINE:
						const { activeUsers } = data;
						const parsed = Object.values(activeUsers).map((o) => {
							return JSON.parse(o as string);
						});
						dispatch(getOnlineUsers(parsed));
						return;
					case MessageActions.USER_ARE_DISCONNECT:
						dispatch(userAreDisconnected(data.user));
						return;
					case MessageActions.TYPING:
						dispatch(typing(data.user));
						console.log(data);

						return;
					case 'error':
						console.log(data);
						return;
					default:
						return;
				}
			};
			ws.onclose = () => {
				dispatch(changeWSstatus(MessageActions.WS_DISCONNECT));
				ws.send(JSON.stringify({ type: MessageActions.USER_ARE_DISCONNECT }));
				wsRef.current = null;
			};
			ws.onerror = async (evt) => {
				dispatch(wsConnectionError());
			};
		},
		[dispatch],
	);
	useEffect(() => {
		const ws = new WebSocket(websocketRoute as string);
		setUpWs(ws);
		return () => {
			wsRef.current = null;
			ws.close(1000);
		};
	}, [setUpWs]);

	const contentRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		contentRef.current?.focus();
	}, [allMessages]);
	const token = getAccessToken();
	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = evt.target;
		setState((prev) => ({ ...prev, content: value }));
		wsRef.current?.send(
			JSON.stringify({
				type: MessageActions.TYPING,
				token,
			}),
		);
		dispatch({
			type: 'MESSAGE_CONTENT_CHANGE',
			payload: {
				value,
			},
		});
	};

	const handleSubmit = (evt: React.FormEvent) => {
		evt.preventDefault();
		const token = getAccessToken();
		setFocus();
		if (!editing) {
			wsRef.current?.send(
				JSON.stringify({
					message_id: Math.random() * 100000,
					text_content: state.content,
					replied_to_text: '',
					replied_to_id: '',
					type: MessageActions.CREATE_MESSAGE,
					token,
				}),
			);
			setState({ content: '', id: 0 });
			return;
		} else {
			handleSubmitEdit(state.id);
		}
	};
	useEffect(() => {
		let timeOut: any;
		if (who_type) {
			timeOut = setTimeout(() => {
				dispatch(typing(null));
			}, 4000);
		}
		return () => {
			timeOut && clearTimeout(timeOut);
		};
	}, [who_type]);
	const hendleRemove = (id: string | number) => {
		wsRef.current?.send(
			JSON.stringify({ type: MessageActions.REMOVE_MESSAGE, id }),
		);
	};
	const handleSubmitEdit = (id: ReactText) => {
		wsRef.current?.send(
			JSON.stringify({
				type: MessageActions.EDIT_MESSAGE,
				id,
				text_content: state.content,
			}),
		);
		setState({ content: '', id: 0 });
		setEditing(false);
	};
	const handleEdit = (message: any) => {
		setState({ content: message.text_content, id: message.id });
		setEditing(true);
	};
	return (
		<div className="messages">
			<div className="messages-container">
				{allMessages.map((o) => {
					if (o.owner_fullname === `${user?.first_name} ${user?.last_name}`) {
						return (
							<div key={Math.random() * 919191} className="message-item-right">
								<span className={'message-owner'}>
									<i
										className="trash alternate icon"
										onClick={() => hendleRemove(o.id)}
									/>
									<i className="edit icon" onClick={() => handleEdit(o)} />
								</span>

								<p className={'message-text'}>{o.text_content}</p>
							</div>
						);
					}
					return (
						<div key={Math.random() * 919191} className="message-item">
							<span className={'message-owner'}>
								<span style={{ marginLeft: 5 }}>{o.owner_fullname}</span>
								<span style={{ marginLeft: 20 }}>
									<i
										className="trash alternate icon"
										onClick={() => hendleRemove(o.id)}
									/>
									<i className="edit icon" onClick={() => handleEdit(o)} />
								</span>
							</span>
							<p className={'message-text'}>{o.text_content}</p>
						</div>
					);
				})}
			</div>
			{who_type && who_type?.id !== user?.id
				? `${who_type?.first_name} is typing...`
				: ''}
			<div className="message-send-form">
				<input
					ref={contentRef}
					name="content"
					value={state.content}
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>
					<i className="paper plane outline icon" />
				</button>
			</div>
		</div>
	);
};

export default MessagesView;
