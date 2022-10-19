import type { NextPage } from 'next'
import { homedir } from 'os'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div className="bg-[#36393f] text-white h-screen overflow-y-auto z-0">
            <Header />

            <Contact />
            <div className = "bg-black sticky bottom-0">
                    <Footer />  
            </div>   
        </div>
    )
}

export default Home;