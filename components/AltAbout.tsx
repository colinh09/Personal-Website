import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

type Props = {}

function AltAbout({title, src, text}) {
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

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold ">{title}</h4>
            <p className = "text-base text-justify">
                {text}
            </p>
        </div>

        <Image
        src = {src}
        alt = "lol"
        width = "7000"
        height = "7000"
        className = "mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />
    </motion.div>
  )
}

export default AltAbout