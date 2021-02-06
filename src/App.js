import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from "./component/ChatFeed";

const  App=()=> {
    return (
        <ChatEngine
            height="100vh"
            projectID="da83a16d-3c96-48b6-8fbb-da6a724bcb66"
            userName="Admin"
            userSecret="121212"
            renderChatFeed={(chatAppProps)=> <ChatFeed{ ... chatAppProps}/>}

        />
    );
}

export default App;
