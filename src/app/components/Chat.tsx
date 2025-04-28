'use client'

import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const Chat = () => {
    useEffect(() => {
        const socket = io({
            path : "/api/socket"
        })

        socket.on('connect', () => {
            console.log("Connected",socket.id);
        })

        socket.on('message',(msg) => {
            console.log("New Msg",msg);
            
        })

        return () => {
            socket.disconnect();
        }
    },[])
  return (
    <div>Socket.io Connected</div>
  )
}

export default Chat