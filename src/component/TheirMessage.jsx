const TheirMessage =({lastMessage,message})=> {
    const isFirstMessageByUser =!lastMessage || lastMessage.sender.username !== message.sender.username;


    return (
        <div ckassName="message-row">
            {isFirstMessageByUser && (
                <div 
                    className='message-avatar'
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                    //here ?. represents that is that value is present than only go further other wise not                
                />
            )}
                {message?.attachments?.length >0
                    ?(
                            <img
                                src={message.attachments[0].file}
                                alt="message is in image form"
                                className="message-image"
                                style={{marginLeft: isFirstMessageByUser ?'4px' :'48px'}}
                            />
                    )
                    :(
                        <div className='message' style={{float:'left',backgroundColor:'#CABC',marginLeft:isFirstMessageByUser? '4px' :'48px' }}>
                            {message.text}                        
                        </div> 
                    )
                }
        </div>
    );
}
export default TheirMessage;