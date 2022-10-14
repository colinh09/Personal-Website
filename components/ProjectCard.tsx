import React, { useState } from 'react'
import { motion } from "framer-motion"
import Modal from './Modal';
import ProjectModal from './ProjectModal';


type Props = {}

function ProjectCard({title, skills, link, bullet_one, bullet_two}: {title: string; skills: string, link: string, bullet_one: string, bullet_two: string}) {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
  return (
    <article className = "flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] md:w-[600px] lg:w[800px] xl:w[900px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 cursor-pointer overflow-hidden">
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.8}}
        onClick={() => (modalOpen ? close() : open() )}>
            <div className = "px-0 md:px-10">
                <h4 className="text-3xl font-light"> {title} </h4>
                <p className = "font-bold text-md mt-1"> Skills Used: {skills} </p>
                <p className = "upperace py-5 text-gray-300"> Click To Read More </p>
            </div>
        </motion.button>         

        {modalOpen && <ProjectModal modalOpen={modalOpen} handleClose={close} title={title} link={link} skills={skills} bullet_one={bullet_one} bullet_two={bullet_two}/>}
    </article>
  )
}

export default ProjectCard