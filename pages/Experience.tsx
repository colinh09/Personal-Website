import type { NextPage } from 'next'
import { homedir } from 'os'
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div>
             <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80">
                <Header />
                Experience
             </div>
        </div>
    )
}

export default Home;