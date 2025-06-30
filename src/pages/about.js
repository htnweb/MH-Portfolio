
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/images/profile/Profile_pic.png";
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

            <AnimatedTitle text="About Me" className=' mb-16 mt-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 lg:col-span-8 lg:order-2 lg:items-center'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>An Introduction</h2>
                        
                        <p className='font-medium'> Hi, I&#39;m Matt, a certified IT support professional and aspiring web developer, transitioning from a 20-year career in manufacturing.
I&#39;ve recently earned certifications in CompTIA A+, AWS Cloud Practitioner, and Microsoft Azure Fundamentals, and gained hands-on experience in both tech support and web development. I enjoy solving problems, learning new skills, and helping people get the most out of technology. Now, I&#39;m excited to start the next chapter of my career in the IT and web development world.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>My Background</h2>

                        <p className='font-medium '>For over 20 years, I worked in manufacturing, where I developed a strong focus on problem-solving, precision, and teamwork. That experience taught me to think systematically and pay close attention to detail, skills that now support my work in IT support and web development.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>Why Web Development & IT Support?</h2>

                        <p className='font-medium'>I&#39;m drawn to both web development and IT support because they allow me to solve real problems and help people through technology. Web development combines creativity and logic, I enjoy building websites that look great and work smoothly across devices. At the same time, IT support gives me the chance to assist users directly, troubleshoot issues, and keep systems running efficiently. Whether I&#39;m designing a user-friendly interface or resolving a technical issue, I find it incredibly rewarding to create solutions that make a difference.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>What I Offer</h2>

                        <p className='font-medium'>I&#39;m a dedicated and adaptable Web & IT Support professional with hands-on experience in HTML, CSS, JavaScript, Python, AWS, and GitHub. I build responsive, accessible websites with clean, efficient code, and have a strong understanding of version control and front-end development principles. Alongside my technical skills, I bring over 20 years of real-world problem-solving from my background in manufacturing, where attention to detail, teamwork, and reliability were key. I&#39;m committed to continuous learning and ready to contribute to a forward-thinking team that values quality, growth, and integrity.</p>


                
                </div>
<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 lg:col-span-8 md:order-1 md:col-span-8'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
    <Image src={profilePic} alt="Matt Hutton" className='w-full h-auto'
    priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
</div>

            </div>
            </Layout>
        </main>
    </>
  )
}

export default about