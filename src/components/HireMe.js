import React from 'react'
import { Spinner } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-2 bottom-20 flex items-center justify-center overflow-hidden '>
    <div className='w-48 h-auto flex items-center justify-center relative'>

    <Spinner className={"fill-dark animate-spin-slow dark:fill-light "} />
    <Link href="mailto:matthutton@hotmail.co.uk" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-dark w-22 h-20 rounded-full font-semibold
     hover:bg-light hover:text-dark
     dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>
        Recruit Me
    </Link>


    </div>





    </div>
  )
}

export default HireMe