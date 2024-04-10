import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './Select.css'

 const Select = () => {

    const [majors, setMajors] = useState([{}])
    useEffect(() => {
        fetch('http://localhost:5000/majors/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setMajors(data.result)
        })

    }, [])

  return (
    <div className='container'>
        <h1 className='Opener'>Lets Generate your Roadmap!</h1>
        <p className='subtext'>Pick your major</p>
        <div className='Majors'>
        {majors.map((major, index) => (
            <motion.button
            
            key={index} 
            initial={{ y: -100, opacity: 0 }}
            animate={{y:0, opacity:1}}
            transition={{ duration: 1, delay: index ===0 ? 0 : index/4}}
            onClick={() => handleClick()}
             
            className='major'>{major.major}</motion.button>
        ))}     
        </div>
    </div>

  )
}
export default Select;
