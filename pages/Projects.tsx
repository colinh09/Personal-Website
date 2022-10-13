import type { NextPage } from 'next'
import { homedir } from 'os'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const Home: NextPage = () => {
    return (
        <div>
             <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 ">
                {/* ----------------- HEADER ---------------------*/}
                <Header />
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-3xl ">
                        PROJECTS
                    </h3>
                </div>
                {/* ----------------- HEADER ---------------------*/}




                {/* ----------------- DATA STRUCTURES AND ALGORITHMS ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-2xl underline decoration-[#000000]/50">
                        Data Structures and Algorithms
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                </div>

                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                </div>

                {/* ----------------- DATA STRUCTURES AND ALGORITHMS ---------------------*/}        




                {/* ----------------- MACHINE LEARNING ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-2xl underline decoration-[#000000]/50">
                        Machine Learning
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                </div>
                {/* ----------------- MACHINE LEARNING ---------------------*/}          


                {/* ----------------- WEB APPS ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-2xl underline decoration-[#000000]/50">
                        Web Apps / Web Development
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-20 lg:pt-15 md:pt-10 pt-10 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                    <ProjectCard title = "project title" skills = "linked priority hashmap queue sort linkeded list O(1)" link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                </div>
                {/* ----------------- WEB APPS ---------------------*/} 





                {/* ----------------- GAME DEV  ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-2xl underline decoration-[#000000]/50">
                        Game Development (Coming Soon!)
                    </h3>            
                </div>

                <div className = "p-20">
                    
                </div>     
                {/* ----------------- GAME DEV ---------------------*/}       

                
                <div className = "bg-black sticky bottom-0">
                    <Footer />  
                </div>                                     
             </div>
        </div>
    )
}

export default Home;