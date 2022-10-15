import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
        initial = {{
            opacity: 0,
        }}
        animate = {{
            scale: [1, 1.7, 1],
            opacity: [0.1, 0.5, 1.0],
            borderRadius: ["20%", "50%", "20%"],
        }}
        transition = {{
            duration: 2.5,
        }}
    className = "relative flex justify-center items-center">
        <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] lg:h-[610px] lg:w-[610px] mt-64"/>
        <div className="absolute rounded-full border border-[#228C22] opacity-20 lg:h-[680px] lg:w-[680px] h-[470px] w-[470px] mt-64 animate-pulse"/>
    </motion.div>
  )
}

export default BackgroundCircles