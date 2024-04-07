import React from "react";
import { useState } from "react";
import {motion} from "framer-motion"

const Basics = ()=> {
    const [isVisible,setIsVisible] = useState(true);
    return(
        <div style={{
            display:"grid",
            placeContent:"center",
            height:"10vh",
            gap:"0.8rem"
        }}>
            <button onClick={()=> setIsVisible(!isVisible)}
            style={{marginBottom:"10px",backgroundColor:"#dedcff", color:"#050315"}}
            >Click Me</button>
            {isVisible && (<motion.div 
            initial={{
                rotate:'0deg',
                opacity:0,
                scale: 0
            }}
            animate={{
                
                rotate:'90deg',
                opacity:100,
                scale:1
                
            }}
            transition={{
                duration:0.5,
                
            }}
            style={{
                width:150,
                height:150,
                background:"#2f27ce",    
                borderRadius:"25px"        }}>
            </motion.div>)}
        </div>
    )
}

export default Basics