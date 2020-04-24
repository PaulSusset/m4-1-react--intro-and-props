import React from 'react'
import './ChatMessage.css'
import Avatar from './components/Avatar'

function ChatMessage(props) {
    if (props.currentUser !== props.message.user){
    return (
    <section className='chat-line'>
        <Avatar classname='chat-img' src={props.message.user.avatar}/>
        {/* <img className='chat-img' src={props.message.user.avatar} alt={props.message.user.username}></img>  */}
        <div className='chat-text'>
            <div className='chat-name'>{props.message.user.username}</div>
            
            <div className='chat-message'>{props.message.body}
                <img className='chat-tip' src='/assets/tip-received.svg' alt=''/>
            </div>
        </div>
    </section>)
    } else {
        return (
            <section className='chat-line-current'>
                    <div className='chat-message current'>{props.message.body}
                        <img className='chat-tip-current' src='/assets/tip-sent.svg' alt=''/>
                    </div>
                    
            </section>)
    }
}
export { ChatMessage }