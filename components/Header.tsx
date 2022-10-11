import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
<header className="sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/colin-hwang-dev/" fgColor = "gray" bgColor = "transparent" target = "_blank"/>

            <SocialIcon url="https://github.com/colinh09" fgColor = "gray" bgColor = "transparent" target = "_blank" />

            <SocialIcon url="https://www.instagram.com/colin_hwang_/" fgColor = "gray" bgColor = "transparent" target = "_blank"/>

            <SocialIcon url="https://www.facebook.com/colin.hwang.92/" fgColor = "gray" bgColor = "transparent" target = "_blank"/>

            <SocialIcon url="https://open.spotify.com/user/p0ney3wrgf83y10ivkpwcyjuy" fgColor = "gray" bgColor = "transparent" target = "_blank"/>
        </motion.div>
        <Link href="/Mail">
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
              <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
              <p className = "uppercase hidden md:inline-flex text-sm text-gray-400"> Get In Touch </p>
          </motion.div>
        </Link>
    </header>
  )
}

export default Header