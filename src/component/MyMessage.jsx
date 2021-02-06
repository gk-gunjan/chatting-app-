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
        <div >
        
        </div>
    );
}
export default MyMessage;