import React, { useState } from "react";
import { motion } from "framer-motion";
import './Chat.css';

const Chat = () => {
    const [question, setQuestion] = useState('How do you feel about your current major do you think it matches your strenght and weaknesses?')
    const [response, setResponse] = useState('')
    const [showResponse, setShowResponse] = useState(false)


    const handleChange = (e) => {
        console.log(e.target.value)
        setResponse(e.target.value)
    }
    const handleClick = () => {
        console.log(response)
        setQuestion(response)
        setShowResponse(true)
        setResponse('thank for your response, we will get back to you soon!')
    }



    return (
        <div className="chat">
            <div className="bot-message">
            <span>{question}</span>
            </div> 
            <div className="chat-response"> 
                <p>
                {showResponse? response: ''}
                </p>
            </div>

      
            
            <div className="messagebox">
    
                <input className="textbox" 
                        type="text"
                        style={ { color:"black" }  } 
                        onChange={ handleChange}
                        value={response}
                        />

                <button className="chatbtn" onClick={handleClick}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
