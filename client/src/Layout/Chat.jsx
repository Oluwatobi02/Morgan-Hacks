import React, { useState } from "react";
import { motion } from "framer-motion";
import './Chat.css';

const Chat = () => {




    return (
        <div className="chat">
            <div className="bot-message">
            <span>How do you feel about your current major do you think it matches your strenght and weaknesses?</span>
            </div> 

      
            
            <div className="messagebox">
    
                <input className="textbox" 
                        type="text"  s
                        style={ { color:"black" }  } 
                        />

                <button className="chatbtn" >Send</button>
            </div>
        </div>
    );
};

export default Chat;
