
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
                        
                        <p className='font-medium'>Hello, my name is Matt. I am a certified technology professional transitioning from a 20-year career in manufacturing. I have recently earned industry-recognised certifications and gained hands-on experience across several areas of tech. I enjoy solving problems, learning new skills, and helping people get the most out of technology. I am now looking forward to starting the next chapter of my career in the tech industry, where I can continue to grow, adapt, and make a meaningful impact.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>My Background</h2>

                        <p className='font-medium '>For over 20 years, I worked in manufacturing, where I developed a strong focus on problem-solving, precision, and teamwork. That experience taught me to think systematically and pay close attention to detail, skills that now support my work and growth in the broader field of technology.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>From Manufacturing to Tech: My Next Chapter</h2>

                        <p className='font-medium'>I am drawn to technology because it allows me to solve real problems and help people through practical, hands-on solutions. I enjoy the balance of creativity and logic, whether it is designing digital experiences or keeping systems running smoothly. Working directly with users, troubleshooting issues, and building intuitive, effective tools all give me a sense of purpose. After years in manufacturing, I find it incredibly rewarding to apply my problem-solving mindset in new ways, creating solutions that make a real difference.</p>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 mt-4 dark:text-light/75'>What I Offer</h2>

                        <p className='font-medium'>I am a dedicated and adaptable technology professional with hands-on experience across web development, cloud services, networking, and version control. I focus on building solutions that are efficient, accessible, and reliable. Alongside my technical skills, I bring over 20 years of real-world problem-solving experience from manufacturing, where attention to detail, teamwork, and dependability were essential. I am committed to continuous learning and excited to contribute to a forward-thinking team that values quality, growth, and integrity.</p>


                
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