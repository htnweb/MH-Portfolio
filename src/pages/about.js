
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/images/profile/Temp Profile.png";
import AnimatedTitle from '@/components/AnimatedTitle'
import TransitionEffect from '@/components/TransitionEffect';

const about = () => {
  return (
    <>
        <Head>
            <title>About Me</title>
            <meta name="An About Me Page" content="About Matt Hutton" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>

            <AnimatedTitle text="About Me" className='mb-16' />
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-4 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>An Introduction</h2>
                        
                        <p className='font-medium'> Hello! I&#39;m Matt , an aspiring web developer transitioning from a 20-year career in the manufacturing business. At 38, I&#39;m embarking on an exciting new journey into the dynamic world of web development.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>My Background</h2>

                        <p className='font-medium '>For the past two decades, I honed my skills in manufacturing, mastering the intricacies of the industry and learning the value of precision, problem-solving, and teamwork. This experience gave me a strong foundation in systematic thinking and a meticulous eye for detail, qualities that I now bring to my work in web development. </p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>Why Web Development?</h2>

                        <p className='font-medium'>Web development has always fascinated me. I love the blend of creativity and logic it requires. Designing websites that are not only visually appealing but also highly functional is something I find incredibly rewarding. The thrill of solving complex problems and optimizing site performance fuels my passion. Whether it&#39;s a sleek, modern interface or a robust, responsive application, I enjoy the challenge of bringing ideas to life on the web.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>What I Offer</h2>

                        <p className='font-medium'>Transitioning to web development allows me to leverage my background in manufacturing while diving into new technologies and methodologies. I bring a unique perspective, combining practical experience with a fresh enthusiasm for digital solutions. My goal is to create efficient, effective, and elegant web applications that solve real-world problems and enhance user experiences.</p>


                
                </div>
<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
    <Image src={profilePic} alt="Matt Hutton" className='w-full h-auto' />
</div>

            </div>
            </Layout>
        </main>
    </>
  )
}

export default about