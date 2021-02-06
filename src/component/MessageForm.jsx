import {useState} from "react";
import {sendMessage ,isTyping} from 'react-chat-engine';
import {SendOutlined ,PictureOutlined, SendOutlined} from "@ant-design/icons";

const MessageForm =(props)=> {
    const [value ,setValue]=useState('');
    const [chatId ,creds]=props;

    const handleSubmit =(event)=>{
        event.preventDefault();//dont refresh the page

        const text= value.trim();//Removes the leading and trailing white space and line terminator characters from a string.

        if(text.length >0) sendMessage(creds,chatId ,{ text }); //text here means text message

        
        setValue('');
    }

    const handleChange =(event)=> {
        setValue(event.target.value);

        isTyping(props,chatId);
    }

    const handleUpload =(event) =>{
        sendMessage(creds,chatId,{file:event.target.value,text:''})
    }
    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Type Here..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />

                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{display:'none'}}
                onChange={handleUpload}
            />
            <button type='submit' className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
}
export default MessageForm;