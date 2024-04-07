import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Chat.css';

const Chat = () => {
    const [header, setHeader] = useState('How do you feel about your current major do you think it matches your strength and weaknesses?')
    const [response, setResponse] = useState('')
    const [showResponse, setShowResponse] = useState(false)
    const [chat, setChat] = useState('')
    const [showNext, setShowNext] = useState(false)


    const handleChange = (e) => {
        console.log(e.target.value)
        setResponse(e.target.value)
    }

    const handleClick = () => {
        console.log(response)
        setChat('')
        setHeader(response)
        setResponse('')
  

    }
    useEffect(() => {
        if (header !== 'How do you feel about your current major do you think it matches your strength and weaknesses?') { 
        fetch('http://localhost:5000/advice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question: header})
        })
        .then(response => response.json())
        .then((data) => {
            setShowResponse(true)
            setChat(data.result)
            setShowNext(true)
        })}
        else {
            setShowResponse(false)

        }
    }, [header])



    return (<>
        <div className="chat">
            <div className="bot-message">
            <span>{header}</span>
            </div> 
            <div className="chat-response"> 
                <p>
                {showResponse? <div className="response">
                    {chat}
                </div>: 
                ''}
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
        {showNext === true? <button className="chatbtn">Next</button> : ''}
        </>
    );
};

export default Chat;
