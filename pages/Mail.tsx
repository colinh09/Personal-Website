import type { NextPage } from 'next'
import { homedir } from 'os'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80 snap-y snap-mandatory">
            <Header />

            <Contact />
            <div className = "bg-black sticky bottom-0">
                    <Footer />  
            </div>   
        </div>
    )
}

export default Home;