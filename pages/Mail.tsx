import type { NextPage } from 'next'
import { homedir } from 'os'
import Contact from '../components/Contact';
import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80 snap-y snap-mandatory">
            <section className="snap-start" id="hero">
                <Header />
            </section>

            <section className="snap-start" id="hero">
                <Contact />
            </section>
        </div>
    )
}

export default Home;