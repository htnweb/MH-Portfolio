import Link from 'next/link'
import React from 'react'
import {easeIn, easeInOut, motion} from 'framer-motion';
import TopText from './TopText';
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-160 h-16 bg-dark text-light flex items-center justify-center rounded-3xl text-2xl font-bold px-2 border border-solid border-transparent dark:border-light'
        
        whileHover={{ 
          backgroundColor:["#000000","rgba(17,17,18,1)", "rgba(56,53,53,1)", "rgba(108,106,105,1)", "rgba(170,169,167,1)", "#000000"] ,
          transition: {duration:3, repeat: Infinity},
          scaleX: 1.2/1,
          opacity: 0.3,
           }}
        ><TopText text="Matt Hutton" />

        
        </MotionLink>
        
    </div>
  )
}

export default Logo