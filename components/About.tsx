
import { motion } from "framer-motion"
import useLocalStorage from 'use-local-storage'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from "next/link";
import cooper from './/../static/CU.webp'

type Props = {}

function About( {text, title} : {text: string, title: string}) {
  return (
    <motion.div 
    initial = {{
        opacity: 0,
    }}
    whileInView = {{
        opacity: 1,
    }}
    transition = {{
        duration: 1.5,
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center py-0">
        <Image
        src = {cooper}
        alt = "lol"
        width = "4000"
        height = "4000"
        className = "mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-2xl font-semibold">{title}</h4>
            <p className = "text-base text-justify">
                {text}
            </p>
        </div>
    </motion.div>
  )
}

export default About