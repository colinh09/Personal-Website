import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

function Footer({}: Props) {
  return (
    <div className="sticky bg-black flex items-start px-5 py-8 justify-between max-w-7xl mx-auto z-20 xl:items-center w-screen">
        <motion.div 
        initial={{
        opacity: 0,
        scale: 0.5,
        }}
        animate = {{
        opacity: 1,
        scale: 1,
        }}
        transition = {{
        duration: 1.5,
        }}
        className = "flex flex-row items-center text-gray-300 cursor-pointer">
            <p className = "uppercase hidden md:inline-flex text-sm text-gray-400 tracking-[8px]"> Colin Hwang </p>
            {/* <Link href="/Resume.pdf" target="_blank">
                <button className="hover:text-[#228C22]/40 px-3 tracking-[3px] "> Resume </button>
            </Link> */}
        </motion.div>

        <motion.div 
        initial={{ 
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          opacity: 1,
          scale: 1,
        }}
        transition = {{
          duration: 1.5,
        }}
        className = "flex flex-row items-center">
            {/* Links */}
            <Link href="/" target="_blank">
                <button className="hover:text-[#228C22]/40 px-3 tracking-[3px] text-sm"> Home </button>
            </Link>
            <Link href="/AboutMe" target="_blank">
                <button className="hover:text-[#228C22]/40 px-3 tracking-[3px] text-sm"> About </button>
            </Link>
            <Link href="/Experience">
                <button className="hover:text-[#228C22]/40 px-3 tracking-[3px] text-sm"> Experience </button>              
            </Link>
            <Link href="/Projects">
                <button className="hover:text-[#228C22]/40 px-3 tracking-[3px] text-sm"> Projects </button>           
            </Link>
        </motion.div>
    </div>
  )
}

export default Footer