import type { NextPage } from 'next'
import Link from 'next/link';
import { homedir } from 'os'
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80">
                <Header />
                <div className="flex relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-15 uppercase tracking-[20px] text-gray-500 text-2xl ">
                        EXPERIENCE
                    </h3>
                </div>
                <div className="flex relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-10 justify-evenly mx-auto items-center">
                    <h3 className="relative top-5 tracking-[3px] text-gray-500 text-xl ">
                        To view my resume, click 
                        <span className='text-xl uppercase tracking-widest text-gray-500 hover:text-[#228C22]/40'>
                            <Link href=".//../static/Resume.pdf" target="_blank"> HERE </Link>
                        </span>
                    </h3>
                </div>         
                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <div className = "md:pb-0 pb-10">
                        <ExperienceCard title = "Software Engineer" company="Applause" 
                        bullet_one="Refined and tested an algorithm essential for the development for the next generation of VR devices." 
                        bullet_two="Worked in a fast-paced environment and collaborated with colleagues to ensure deliverables were met to standard
                        and presented to clients in an efficient and timely manner." 
                        bullet_three="Surveyed approximately 20 testers per week and ensured that tests are properly administered. Aided colleagues when tests ran too long in order to prevent ineffiency and loss of data. "
                        />
                    </div>
                    <ExperienceCard title = "Teacher Assistant" company="The Cooper Union" 
                    bullet_one="Taught and provided opportunity to students that come from under-represented groups in the field of STEM." 
                    bullet_two="Enabled students to develop familiarity with extended reality and aided students with developing skills in
                    engineering design, computer aided design, and web-based programming." 
                    bullet_three="Assisted student teams in developing multiple projects, digital portfolios, and final presentations involving using
                    CAD, HTML, and JavaScript to prototype and develop enhancements to in game objects."
                    />
                </div>

                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <div className = "md:pb-0 pb-10">
                        <ExperienceCard title = "Lifeguard" company="Town of North Hempstead" 
                        bullet_one="Underwent intensive CPR and lifeguard rescue training to prepare for real-world rescue scenarios." 
                        bullet_two="Worked alongside other lifeguards to maintain a safe and clean environment for patrons to enjoy." 
                        bullet_three="Lead and aided in several rescues involving administering first-aid and CPR - scenarios ranged from low-risk to life-threatening"
                        />
                    </div>
                    {/* <ExperienceCard title = "Software Engineer" company="Applause" 
                    bullet_one="Refined and tested an algorithm essential for the development for the next generation of VR devices." 
                    bullet_two="Worked in a fast-paced environment and collaborated with colleagues to ensure deliverables were met to standard
                    and presented to clients in an efficient and timely manner." 
                    bullet_three="Some other thing."
                    /> */}
                </div>
                <div className = "p-20">
                    
                </div>      
            </div>
            <div className = "bg-black sticky bottom-0 text-white">
                    <Footer />  
            </div>       
        </div>
    )
}

export default Home;