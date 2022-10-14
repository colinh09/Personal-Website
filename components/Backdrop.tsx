import React, { ReactNode } from 'react'
import {motion} from "framer-motion"
import { captureRejectionSymbol } from 'events'

type Props = {}

function Backdrop({onClick, children}: {onClick:  () => void, children: ReactNode}) {
  return (
    <motion.div
    className = "absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-70 flex items-center justify-center"
    onClick = {onClick}
    initial = {{ opacity: 0}}
    animate = {{ opacity: 1}}
    exit = {{ opacity: 0}}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop