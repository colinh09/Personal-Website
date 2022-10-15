import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import BackgroundCircles from './BackgroundCircles'
import me from './/../static/me.jpg'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello! My name is Colin Hwang",
            "I am a Student at The Cooper Union",
            "I am a Computer Scientist",
            "I am an Electrical Engineer"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image className="relative rounded-full mx-auto object-cover" alt="Picture of Colin Hwang" src={me} width={200} height={200}/>
        <div className="z-20">
            <h2 className = "text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1 className = "text-3xl lg:text-4xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#228C22" />
            </h1>
            <div className="pt-5">
                <Link href="/AboutMe" target="_blank">
                <button className="heroButton"> About </button>
                </Link>
                <Link href="/Experience">
                <button className="heroButton"> Experience </button>              
                </Link>
                <Link href="/Projects">
                <button className="heroButton"> Projects </button>           
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero