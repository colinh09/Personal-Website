import { motion } from "framer-motion"
import Backdrop from "./Backdrop"

import React from 'react'
import Link from "next/link"

type Props = {}

function ProjectModal({handleClose, bullet_one, bullet_two, title, skills, link}: {handleClose: () => void, bullet_one: string, bullet_two: string, title: string, skills: string, link: string}) {
  return (
    <Backdrop onClick = {handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className = "sm:w-1/2 md:w-3/4 lg:w-4/5 m-auto px-0 py-8 flex flex-col items-center rounded-xl bg-white text-slate-900 z-50"
        // variants={dropIn}
        // initial="hidden"
        // animate="visible"
        // exit="exit"
        >
            <h4 className="text-4xl font-light px-5"> {title} </h4>
            <p className = "font-bold text-2xl pt-5 pb-10 px-5"> Skills Used: {skills} </p>
            <ul className = "text-slate-500 list-disc space-y-4 ml-5 text-lg px-5">
                <li>{bullet_one}</li>
                <li>{bullet_two}</li>
            </ul>
            <Link href={link} target = "_blank" >
                <p className = " hover:text-[#228C22]/40 text-2xl pb-9 pt-20"> Click here to view the github repository for this project </p>
            </Link>
            <button onClick={handleClose} className = "heroButton">Close</button>
        </motion.div>
    </Backdrop>
  )
}

export default ProjectModal