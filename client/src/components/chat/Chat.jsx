import { useContext, useState } from 'react';
import './chat.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import {format} from "timeago.js";

function Chat({ chats }) {
    const [chat, setChat] = useState(null);
    const { currentUser } = useContext(AuthContext);
    console.log(chat);

    const handleOpenChat = async (id, receiver) => {
        await apiRequest(`/chats/${id}`)
            .then(res => {
                setChat({ ...res.data, receiver });
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault;

        const formData = new FormData(e.target);
        const text = formData.get("text");

        if(!text) return;
        await apiRequest.post("/messages/"+chat.id, {text})
        .then(res=>{
            setChat(prev=>({...prev, message: [...prev.message, res.data]}))
            e.target.reset();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                {
                    chats.data?.map(c => (
                        <div className="message" id={c.id} style={{ backgroundColor: c.seenBy.includes(currentUser.id) ? "white" : "#fecd514e" }} onClick={() => handleOpenChat(c.id, c.receiver)}>
                            <img src={c.receiver.avatar || "./noavatar.jpg"} alt="" />
                            <span>{c.receiver.username}</span>
                            <p>
                                {
                                    c.lastMessage
                                }
                            </p>
                        </div>
                    ))
                }
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
                        {chat.receiver.username}
                    </div>
                    <span className='close' onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                    {
                        chat.message.map((message) => (
                            <div className="chatMessage" key={message.id} style={{alignSelf:message.userId===currentUser.id ? "flex-end": "flex-start", textAlign: message.userId===currentUser.id ? "right": "left"}}>
                                <p>{message.text}</p>
                                <span>{format(message.createdAt)}</span>
                            </div>
                        ))
                    }
                </div>
                <form onSubmit={handleSubmit} className="bottom">
                    <textarea name="text"></textarea>
                    <button>Send</button>
                </form>
            </div>)}
        </div>
    )
}

export default Chat;