import React from 'react';
import Chats from './Chats';
import MyChat from './MyChat';

const CHATBOX = (props) => {
  return (
    <div>
      {props.chats.map((item) => {
        return !item.sender.self ? (
          <Chats image={item.sender.image} message={item.message} />
        ) : (
          <MyChat message={item.message} />
        );
      })}
    </div>
  );
};

export default CHATBOX;
