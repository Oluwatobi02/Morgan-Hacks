import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="wrapper">
            {/* Animate the header */}
            <motion.div
                className="Header"
                initial={{ x: -100, opacity: 0 }} // Initial position and opacity
                animate={{ x: 0, opacity: 1 }} // Animation properties
                transition={{ duration: 1 }} // Animation duration
            >
                <h1>Welcome to</h1>
                <h1 className="Excelerate">FastTrack</h1>
            </motion.div>
            {/* Animate the paragraph */}
            <motion.p className="para"
                initial={{ x: +100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay:0.3 }} // Add delay to stagger animations
            >
                Fasttrack your career
            </motion.p>
            <Link to='/chat'><motion.button
                initial={{scale:0}}
                animate={{scale: [0,1,1,1]}}
                transition={{ duration: 2, delay: 0.5 }} className="homebtn"
                >
              Get Started
                
                </motion.button></Link>
        </div>
    );
};

export default Home;
