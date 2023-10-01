import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Saturn from '../../assets/Saturn.png'

const Home = () => {
  return (
    <div className='bg-slate-900 flex items-center justify-center h-screen'>
        <div className='text-purple-400 text-2xl flex flex-col justify-center items-center px-4'>
        <div>
        <motion.div
            animate={{
                y: [-10, 10],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
            }}
        >
            <img src={Saturn}
            alt="astronaut"
            className="w-64"
            />
        </motion.div>
        </div>
        <div>
        <h1 className='text-2xl md:text-4xl font-bold text-white mb-4'>Welcome to <span className='text-purple-400'>Warehouse Genie</span></h1>
        <Typewriter
            options={{
                strings: ['Inventory Management', 'AI Assistant','Recommendation Engine'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
               
            }}
            
            />
        </div>
        <button className='bg-purple-400 mt-6 text-white text-base p-2 rounded-md w-1/2'
            onClick={() => window.location.href='/login'}
        >
            Get Started
        </button>
        </div>
    </div>
  )
}

export default Home