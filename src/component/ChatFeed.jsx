import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed =(props)=>{
    const {chats,activeChat,userName,messages} =props;

    const chat=chats && chats[activeChat];// if chats exits then we look at the specific active chats.

    //console.log(chat,userName,messages);//check if everything comes up nicely  to our console log

    const renderMessages =()=>{
        const keys =Object.keys(messages);
        //key here is to get specific key to the messages.
        //console.log(keys);

        //rendering our messages
        return keys.map((key,index)=>{
            const message =messages[key]; //dynamically take key message with value key we want to loop over them.
            const lastMessageKey =index===0 ? null :keys[index-1];//basically here if there are message then find the last message.
            const isMyMessage =userName ===message.sender.username; //checking message is from our side.

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px':'0px' ,marginLeft: isMyMessage ? '0px' :'68px' }}>
                        read receipts
                    </div>
                </div>
            )
        })


    }
    renderMessages();

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title}                   
                </div>
                <div className="chat-subtitle">
                    {chat?.people.map((person)=> `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}} />
            <div className='message-form-container'>
                <MessageForm {...props} chatId={activeChat} />
            </div>            
        </div>
    )
}
export default ChatFeed;