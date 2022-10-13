import type { NextPage } from 'next'
import { homedir } from 'os'
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div>
            <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80">
                <Header />
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
                        EXPERIENCE
                    </h3>
                </div>
                
                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <div className = "md:pb-0 pb-10">
                        <ExperienceCard title = "Software Engineer" company="Applause" 
                        bullet_one="Refined and tested an algorithm essential for the development for the next generation of VR devices." 
                        bullet_two="Worked in a fast-paced environment and collaborated with colleagues to ensure deliverables were met to standard
                        and presented to clients in an efficient and timely manner." 
                        bullet_three="Some other thing."
                        />
                    </div>
                    <ExperienceCard title = "Software Engineer" company="Applause" 
                    bullet_one="Refined and tested an algorithm essential for the development for the next generation of VR devices." 
                    bullet_two="Worked in a fast-paced environment and collaborated with colleagues to ensure deliverables were met to standard
                    and presented to clients in an efficient and timely manner." 
                    bullet_three="Some other thing."
                    />
                </div>

                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <div className = "md:pb-0 pb-10">
                        <ExperienceCard title = "Software Engineer" company="Applause" 
                        bullet_one="Refined and tested an algorithm essential for the development for the next generation of VR devices." 
                        bullet_two="Worked in a fast-paced environment and collaborated with colleagues to ensure deliverables were met to standard
                        and presented to clients in an efficient and timely manner." 
                        bullet_three="Some other thing."
                        />
                    </div>
                    <ExperienceCard title = "Software Engineer" company="Applause" 
                    bullet_one="Refined and tested an algorithm essential for the development for the next generation of VR devices." 
                    bullet_two="Worked in a fast-paced environment and collaborated with colleagues to ensure deliverables were met to standard
                    and presented to clients in an efficient and timely manner." 
                    bullet_three="Some other thing."
                    />
                </div>
                <div className = "p-20">
                    
                </div>     
                <div className = "bg-black sticky bottom-0">
                    <Footer />  
                </div>         
            </div>
        </div>
    )
}

export default Home;