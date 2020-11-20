
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageIncome } from '../../actions/Messages';

import { IInitialMessagesState } from '../../reducers/Messages';
const MessageActions = {
    CREATE_MESSAGE: 'CREATE_MESSAGE',
    GET_ALL_MESSAGES: 'GET_ALL_MESSAGES',
    GET_MESSAGE_BY_ID: 'GET_MESSAGE_BY_ID',
    REMOVE_MESSAGE: 'REMOVE_MESSAGE',
    EDIT_MESSAGE: 'EDIT_MESSAGE',
};
const MessagesList: React.FC = () => {
    const wsRef = useRef<WebSocket | null>(null);
    const [state, setState] = useState({ content: '' });
    const dispatch = useDispatch()
    const { allMessages } = useSelector<any, IInitialMessagesState>(state => state.messages)
    const setUpWs = useCallback((ws: WebSocket) => {
        dispatch({
            type: 'WS_CONNECTING'
        });
        ws.onopen = () => {
            dispatch({
                type: 'WS_CONNECTED'
            });
            ws.send(JSON.stringify({
                type: MessageActions.GET_ALL_MESSAGES as string,
                token: '221133',
            }));

            wsRef.current = ws;
        };
        ws.onmessage = async evt => {

            const data = JSON.parse(evt.data);
            switch (data.type) {
                case MessageActions.GET_ALL_MESSAGES:
                    dispatch(messageIncome(data.messages))
                    break;
                default:
                    break;
            }

        };
        ws.onclose = () => {
            dispatch({
                type: 'WS_DISCONNECTED'
            });
            wsRef.current = null;
        }
    }, [dispatch]);


    useEffect(() => {
        const ws = new WebSocket(process.env.REACT_APP_WS_URL as string);
        setUpWs(ws);
        return () => {
            wsRef.current = null;
            ws.close(1000);
        }
    }, [setUpWs]);

    const contentRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        contentRef.current?.focus();
        console.log(allMessages);

    }, [allMessages]);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        // wsRef.current?.send(JSON.stringify({
        //     type: 'Typing'
        // }))
        setState(prev => ({ ...prev, content: value }))
        dispatch({
            type: 'MESSAGE_CONTENT_CHANGE',
            payload: {
                value
            }
        });
    }

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        wsRef.current?.send(JSON.stringify({
            message_id: Math.random() * 100000,
            text_content: state.content,
            owner_id: Math.round(Math.random() * 100000),
            replied_to_text: '',
            replied_to_id: '',

        }));
        setState({ content: '' })
        dispatch({
            type: 'MESSAGE_SENT'
        });
    }

    const hendleRemove = (id: string | number) => {
        console.log(id);

        wsRef.current?.send(JSON.stringify({ type: MessageActions.REMOVE_MESSAGE, id }))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={contentRef} name="content" value={state.content} onChange={handleChange} />
                <button>Send</button>
            </form>
            <div className="">
                {allMessages.map(o => <div key={Math.random() * 919191}>{o.text_content}<button onClick={() => hendleRemove(o.id)}>Remove</button> </div>)}
            </div>
        </>
    );
}

export default MessagesList;
