const MyMessage =()=> {
    const handleSubmit =(e)=>{
        e.preventDefaults;
        
    }
    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input 
                className="message-input"
                
            />

        </form>

    );
}
export default MyMessage;