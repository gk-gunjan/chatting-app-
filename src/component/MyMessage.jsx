const MyMessage =({message})=>{
    //here we check if message is text or an image
    if(message?.attachments?.length  >0){
        return (
            <img
                src={message.attachments[0].file}
                alt="message is in image form"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    
    return (
        <div className='message' style={{float:'right', marginRight:'18pc',color: 'white',backgroundColor:'#3B2A50'}} >
            {message.text}
        
        </div>
    );
}
export default MyMessage;