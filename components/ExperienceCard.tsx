import React, { useState } from 'react'
import { motion } from "framer-motion"
import Modal from './Modal';


type Props = {}

function ExperienceCard({title, company, bullet_one, bullet_two, bullet_three}: {title: string, company: string, bullet_one: string, bullet_two: string, bullet_three: string}) {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
  return (
    <article className = "flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] md:w-[600px] lg:w[800px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.8}}
        onClick={() => (modalOpen ? close() : open() )}>
            <div className = "px-0 md:px-10">
                <h4 className="text-4xl font-light"> {title} </h4>
                <p className = "font-bold text-2xl mt-1"> {company} </p>
                <p className = "upperace py-5 text-gray-300"> Click To Read More </p>
            </div>
        </motion.button>         

        {modalOpen && <Modal handleClose={close} title={title} company={company} bullet_one={bullet_one} bullet_two={bullet_two} bullet_three={bullet_three}/>}
    </article>
  )
}

export default ExperienceCard