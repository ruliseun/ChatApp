import React, { useEffect, useState, useRef } from 'react'
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import Button from './Button'
import { auth, db } from '../firebase-config'
import { ChatStyle } from '../styles/ChatStyle'


const Chat = ({room}) => {
    const [ message, setMessage ] = useState ('')
    const [newMessages, setNewMessages] = useState([])

    const messageRef = collection(db, 'messages')

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(message === '') return
        setMessage('')

        await addDoc(messageRef, {
            message,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            userImg: auth.currentUser.photoURL,
            room,
        })
    }

    const queryMessages = query(messageRef, where('room', '==', room), orderBy('createdAt'), limit(25))

    useEffect(() => {
        const onSubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = []
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setNewMessages(messages) 
        })

        return () => onSubscribe()

    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [newMessages]);

  return (
    <ChatStyle>
        <div className='header'>
            <h1>Chat Room: {room.toUpperCase() }</h1>
        </div>
        <hr />

        <div className='messages'>
            {
                newMessages.map((messageRecord) => (
                    <div key={messageRecord.id}>
                        <div className={messageRecord?.user !== auth.currentUser.displayName ? 'message-header' : 'message-header-sender'}>
                           {
                             messageRecord?.user !== auth.currentUser.displayName ? (
                                <>
                                    <img src={messageRecord?.userImg} alt="dp" style={{width:'10%', borderRadius: '100%'}}/>
                                    <span className='user'>{messageRecord.user}</span>
                                </>
                            ) : (
                                <>
                                    <span className='user'>{messageRecord.user}</span>
                                    <img src={messageRecord?.userImg} alt="dp" style={{maxWidth:'10%', borderRadius: '100%'}}/>
                                </>
                            )
                           } 
                        </div>
                        <h5 className={messageRecord.user !== auth.currentUser.displayName ? 'message-text' : 'message-text-sender'}>{messageRecord.message}</h5>
                        <div ref={messagesEndRef} />
                    </div>
                ))
            }
        </div>

        <form onSubmit={handleSubmit} action="">
            <textarea rows="2" cols="30" placeholder='Type your message here...' onChange={handleChange} value={message} autoFocus/>
            <Button name={'Send'} clickAction={handleSubmit} type={'submit'}/>
        </form>
    </ChatStyle>
  )
}

export default Chat