import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/MH_Profilepic_final.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import smallpc from "../../public/images/svgs/smallpc.svg";
import TransitionEffect from '@/components/TransitionEffect';


export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Hutton Portfolio</title>
        <meta name="Portfolio" content="Matt Hutton's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className= 'flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Matt Hutton" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Transforming My Career For A Brighter Future." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>I&#39;ve recently uncovered a strong passion for web development,
               captivated by its perfect blend of creativity and technical problem-solving.
                This newfound interest drives me to explore the intricacies of coding, design, and user experience, transforming ideas into engaging digital realities.
                 Eager to dive deeper, I am committed to expanding my knowledge and skills in this dynamic field, excited by the constant learning and innovation it demands.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/CV will go here.txt" target={'_blank'} className='flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'download={true}>CV
                <LinkArrow className={"w-auto h-auto ml-4"}/>
                </Link>
                <Link href="mailto:matthutton@hotmail.co.uk" target={'_blank'}
                className='px-2 ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
              </div>
            </div>

          </div>

        </Layout>
        <HireMe />
        <div className='fixed right-20 bottom-20 inline-block w-40 '>
          <Image src={smallpc} alt="Small Pc" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}

