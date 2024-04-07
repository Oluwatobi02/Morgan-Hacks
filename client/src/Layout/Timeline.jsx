import React from 'react';
import './Timeline.css'; // Import your CSS file for styling
import {motion} from 'framer-motion';

const Timeline = () => {
  return (
    <>
    <div className='Maincon'>
    <h3 className='Title'>Roadmamp</h3>
    <hr className='hr' />
    <motion.div 
    
        initial={{scale: 0}}
        animate={{scale:[1,0,1,1]}}
        transition={{duration:2}}
        className='Main'>
        <div className='Card'>
            <h3>Roles</h3>
            <hr />
            <ul>
                
            </ul>
        </div>

        <div className='Card'>
            <h3>Skills</h3>
            <hr />
            <ul>
                
            </ul>
        </div>

        <div className='Card'>
            <h3>Target Companies</h3>
            <hr />
            <ul>
                
            </ul>
        </div>

        <div className='Card'>
            <h3>Resources</h3>
            <hr />
            <ul>
                
            </ul>
        </div>

        
    </motion.div>
    <button className='btn'>Interview</button>
    </div>
    </>
  );
};

export default Timeline;
