import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from './Footer';

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

function Contact({}: Props) {
    const { 
        register, 
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =  `mailto:hcolin0910@gmail.com?subject=${formData.subject}&body=${formData.message}`
    };

  return (

    <div className = "h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <div className="flex relative text-center md:text-left md:flex-row max-w-7xl px-10 lg:pb-10 pb-5 justify-evenly mx-auto items-center">
                <h3 className="relative top-15 uppercase tracking-[20px] text-gray-500 text-2xl ">
                    CONTACT ME
                </h3>
            </div>
        <div className = "flex flex-col pt-7">
            <h4 className = "text-4xl font-semibold text-center pb-10">
                Lets Talk!
            </h4>

            <div className = "space-y-10">
                <div className = "flex items-center justify-center">
                    <PhoneIcon className = "text-[#228C22] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+516-996-8066</p>
                </div>

                <div className = "flex items-center justify-center">
                    <EnvelopeIcon className = "text-[#228C22] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">hcolin0910@gmail.com</p>
                </div>

                {/* <div className = "flex items-center space-x-5 justify-center">
                    <MapPinIcon className = "text-[#228C22] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">123 Dev. Lane</p>
                </div> */}

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className = "flex flex-col space-y-5 pt-3 w-fit mx-auto">
                <div className = "flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>

                <input {...register('subject')}  placeholder="Subject" className = "contactInput" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput" />
                <button type="submit" className= "bg-[#228C22] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>       
    </div>
  )
}

export default Contact