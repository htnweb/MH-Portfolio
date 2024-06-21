import React from 'react'
import { animate, delay, easeIn, motion, stagger } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.5}
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 0,
        x: 200,
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration:4,}
    }
}

const TopText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`inline-block w-full text-light font-bold capitalize text-center   ${className}`}
        variants={quote}
        initial="initial"
        animate="animate">
    {
        text.split(" ").map((word, index) => 
            <motion.span key={word+'-'+index} className='inline-block'
            variants={singleWord}
            >
                {word}&nbsp;
            </motion.span>)
    }
        </motion.h1>
    </div>
  )
}

export default TopText


