import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import command from "../../public/images/certificates/command.png";
import css from "../../public/images/certificates/css.png";
import git from "../../public/images/certificates/git.png";
import html from "../../public/images/certificates/html.png";
import javascript from "../../public/images/certificates/javascript.png";
import python from "../../public/images/certificates/python.png";
import AnimatedTitle from '@/components/AnimatedTitle'
import TransitionEffect from '@/components/TransitionEffect'



const certificates = () => {
  return (
    <>
        <Head>
            <title>Certificates</title>
            <meta name="Certificates of Completion" content="My Certificates" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center'>
        <Layout>
        <AnimatedTitle text="Certificates of Completion" className='mb-10' />
        <div className='grid w-full grid-cols-3 gap-4 mt-2 '>
            <Image src={html} alt="Matt Hutton html" className='w-full h-full' />
            <Image src={css} alt="Matt Hutton css" className='w-full h-full' />
            <Image src={python} alt="Matt Hutton python" className='w-full h-full' />
            <Image src={command} alt="Matt Hutton command line" className='w-full h-full' />
            <Image src={git} alt="Matt Hutton git" className='w-full h-full' />
            <Image src={javascript} alt="Matt Hutton javascript" className='w-full h-full' />
            
        </div>
            
        </Layout>
        </main>


    </>
  )
}

export default certificates