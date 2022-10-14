
import { motion } from "framer-motion"
import useLocalStorage from 'use-local-storage'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from "next/link";

type Props = {}

function About( {text, src, title} ) {
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
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <Image
        src = {src}
        alt = "lol"
        width = "5500"
        height = "5500"
        className = "mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">{title}</h4>
            <p className = "text-md text-justify">
                {text}
            </p>
            <p className = "text-md text-justify">
                To view my resume and transcript, click on 
                <Link download href="/public/resume.pdf" locale={false}>
                     RESUME
                </Link>
                or 
                TRANSCRIPT.
            </p>
        </div>
    </motion.div>
  )
}

export default About