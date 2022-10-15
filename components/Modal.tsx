import { motion } from "framer-motion"
import Backdrop from "./Backdrop"

import React from 'react'

type Props = {}

// const dropIn {
//     hidden: {
//         y: "-100vh",
//         opacity: 0,
//     },
//     visible: {
//         y: "0",
//         opacity: 1,
//         transition: {
//             duration: 0.1,
//             type: "spring",
//             damping: 25,
//             stiffness: 500,
//         }
//     },
//     exit: {
//         y: "100vh",
//         opacity: 0,
//     },
// }

function Modal({handleClose, bullet_one, bullet_two, bullet_three, title, company}: {handleClose: () => void, bullet_one: string, bullet_two: string, bullet_three: string, title: string, company: string}) {
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
            <p className = "font-bold text-2xl pb-9 mt-1 px-5"> {company} </p>
            <ul className = "text-slate-500 list-disc space-y-4 ml-5 text-lg px-5">
                <li>{bullet_one}</li>
                <li>{bullet_two}</li>
                <li className="pb-10">{bullet_three}</li>
            </ul>
            <button onClick={handleClose} className = "heroButton">Close</button>
        </motion.div>
    </Backdrop>
  )
}

export default Modal