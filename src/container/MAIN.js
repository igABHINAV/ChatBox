import React from 'react'
import Chats from './Chat/Chats'
import MyChat from './Chat/MyChat'
import TextBar from './TextBar/TextBar'
import Header from './Header/Header'
import CHATBOX from './Chat/CHATBOX'
import DAta from '../Data/DATA'
const MAIN = () => {
    const data = DAta
    return (
        <div>
            <div className='container  justify-content-center' style={{ backgroundColor: "rgb(241, 241, 241)" , width:"450px" }}>
                <br /><br />
                <Header from={data.from} to={data.to}  trip={data.name}/>
                <br />
                <CHATBOX chats = {data.chats}/>
                <Chats />
                <MyChat />
                <br />
                <TextBar />
                <br /><br />
            </div>
        </div>
    )
}

export default MAIN
