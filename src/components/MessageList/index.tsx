
import React, { useEffect, useRef, useCallback, useState, ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageEdit, messageGetAll, messageRemove } from '../../actions/Messages';
import { MessageActions } from '../../actions/Messages/interface';

import { IInitialMessagesState } from '../../reducers/Messages';
import { getAccessToken } from '../../utils';

const MessagesList: React.FC = () => {
    const wsRef = useRef<WebSocket | null>(null);
    const [state, setState] = useState({ content: '', id: 0 });
    const [wsConnectionError, setwsConnectionError] = useState(false);
    const dispatch = useDispatch()
    const { allMessages } = useSelector<any, IInitialMessagesState>(state => state.messages)
    const [editing, setEditing] = useState(false);
    const setUpWs = useCallback((ws: WebSocket) => {

        dispatch({
            type: 'WS_CONNECTING'
        });
        ws.onopen = () => {
            //TODO: for first we must send token ALWAYS!!!
            setwsConnectionError(false)
            const token = getAccessToken()
            ws.send(JSON.stringify({
                type: MessageActions.GET_ALL_MESSAGES as string,
                token,
            }));
            wsRef.current = ws;
        };
        ws.onmessage = async evt => {
            //TODO: must implement messages type of 'TYPING'
            const data = JSON.parse(evt.data);
            switch (data.type) {
                case MessageActions.GET_ALL_MESSAGES:
                    dispatch(messageGetAll(data.messages))
                    break;
                case MessageActions.REMOVE_MESSAGE:
                    dispatch(messageRemove(data.id))
                    break
                case MessageActions.EDIT_MESSAGE:
                    dispatch(messageEdit(data.message))
                    break
                default:
                    break;
            }

        };
        ws.onclose = () => {
            //TODO: must say to user that you are offline
            const token = getAccessToken()
            ws.send(JSON.stringify({}))
            wsRef.current = null;
        }
        ws.onerror = async evt => {
            // TODO: Must impmlement  websocket connection error
            // dispatch()
            // console.log('error');
            setwsConnectionError(true)
        }
    }, [dispatch]);


    useEffect(() => {
        const ws = new WebSocket(process.env.REACT_APP_WS_URL as string);
        setUpWs(ws);


        return () => {
            wsRef.current = null;
            ws.close(1000);
        }
    }, [setUpWs,]);

    const contentRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        contentRef.current?.focus();
        console.log(allMessages);

    }, [allMessages]);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setState(prev => ({ ...prev, content: value }))
        dispatch({
            type: 'MESSAGE_CONTENT_CHANGE',
            payload: {
                value
            }
        });
    }

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault(); const token = getAccessToken()
        if (!editing) {
            wsRef.current?.send(JSON.stringify({
                message_id: Math.random() * 100000,
                text_content: state.content,
                replied_to_text: '',
                replied_to_id: '',
                type: MessageActions.CREATE_MESSAGE,
                token
            }));
            setState({ content: '', id: 0 })
            dispatch({
                type: 'MESSAGE_SENT'
            });
            return
        } else {
            handleSubmitEdit(state.id)
        }
    }


    const hendleRemove = (id: string | number) => {
        wsRef.current?.send(JSON.stringify({ type: MessageActions.REMOVE_MESSAGE, id }))
    }
    const handleSubmitEdit = (id: ReactText) => {

        wsRef.current?.send(JSON.stringify({ type: MessageActions.EDIT_MESSAGE, id, text_content: state.content }))
        setState({ content: '', id: 0 })
        setEditing(false)
    }
    const handleEdit = (message: any) => {
        setState({ content: message.text_content, id: message.id })
        setEditing(true)
    }

    const token = getAccessToken()
    if (!token) {
        return null
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={contentRef} name="content" value={state.content} onChange={handleChange} />
                <button>Send</button>
            </form>
            <div>
                {wsConnectionError && 'connection-error'}
            </div>
            <div className="">
                {allMessages.map(o => <div key={Math.random() * 919191}>{o.owner_fullname} - {o.text_content}<button onClick={() => hendleRemove(o.id)}>Remove</button>
                    <button onClick={() => handleEdit(o)}>edit</button></div>)}
            </div>
        </>
    );
}

export default MessagesList;
