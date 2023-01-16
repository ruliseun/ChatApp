import React, { useState, useRef } from 'react'
import { chatRoom } from '../atoms/roomState'
import Button from './Button'
import Chat from './Chat'
import { useRecoilState } from 'recoil';
import { ChatSpaceStyle } from '../styles/ChatSpaceStye';

const ChatRoom = () => {
    const [room, setRoom] = useRecoilState(chatRoom)
    const roomInputRef = useRef(null)

    const handleCreateRoom = () => {
        setRoom(roomInputRef.current.value)
    }

  return (
    <>
    {
        room ? <Chat room={room} /> :
        <ChatSpaceStyle>
            <div className='create-room'>
                <label htmlFor="">Create or Join a Chat Space</label>
                <input type="text" ref={roomInputRef } placeholder={'Enter room name'} autoFocus/>
                <Button name="Enter Chat" clickAction={handleCreateRoom} />
            </div>
        </ChatSpaceStyle>
    }
    </>
  )
}

export default ChatRoom