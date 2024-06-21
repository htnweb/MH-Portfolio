import React from 'react'
import { animate, easeIn, motion, stagger } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.2,}
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: -50,
        x: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration:1,}
    }
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden '>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light  ${className}`}
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

export default AnimatedText


