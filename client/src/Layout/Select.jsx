import React from 'react'
import {motion} from 'framer-motion'
import './Select.css'

 const Select = () => {
  return (
    <div className='container'>
        <h1 className='Opener'>Lets Generate your Roadmap!</h1>
        <p className='subtext'>Pick your major</p>
        <div className='Majors'>        
            <motion.button 
                initial={{ y: -100, opacity: 0 }}
                animate={{y:0, opacity:1}}
                transition={{ duration: 1}}
                 
                className='major'>Computer Science</motion.button>
            <motion.button 
                initial={{ y: -100, opacity: 0 }}
                animate={{y:0, opacity:1}}
                transition={{ duration: 1, delay: 0.25}}
                className='major'>Math</motion.button>
            <motion.button c
                 initial={{ y: -100, opacity: 0 }}
                 animate={{y:0, opacity:1}}
                 transition={{ duration: 1, delay: 0.5}}
            className='major'>Biology</motion.button>
            <motion.button className='major'
                initial={{ y: -100, opacity: 0 }}
                animate={{y:0, opacity:1}}
                transition={{ duration: 1, delay: 1}}
            >Criminal Justice</motion.button>
        </div>
    </div>

  )
}
export default Select;
