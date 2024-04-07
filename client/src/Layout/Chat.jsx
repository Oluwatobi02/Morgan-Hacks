import React, { useState } from "react";
import { motion } from "framer-motion";
import './Chat.css';

const Chat = () => {
    const [showQuestion, setShowQuestion] = useState(true)
    const [userInput, setUserInput] = useState("")
    const [displayInput, setDisplayInput ] = useState("")
    const handleClick = () => {
        setShowQuestion(false)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setDisplayInput(userInput)
            setShowQuestion(false)
            
        }
    }
    const handleChange = (event) =>{
        console.log(event.target)
        console.log("Value: ", event.target.value)
       setUserInput( event.target.value)
    }

    return (
        <div className="chat">
            <div className="bot-message">
            {showQuestion? 
                <p>How do you feel about your current major do you think it matches your strenght and weaknesses?</p>: <p> { displayInput }</p>
            }
            </div> 

      
            
            <div className="messagebox">

                <input className="textbox" type="text"  style={ { color:"black" }  } onChange={handleChange } value={ userInput} onKeyDown={ handleKeyDown }/>

                <button  className="chatbtn" onClick={handleClick} >Send</button>
            </div>
        </div>
    );
};

export default Chat;
