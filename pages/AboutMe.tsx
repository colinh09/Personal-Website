import type { NextPage } from 'next'
import React from 'react';
// import createReactContext, { type Context } from 'create-react-context';
import { homedir } from 'os'
import About from '../components/About';
import AltAbout from '../components/AltAbout';
import Header from '../components/Header';
import useLocalStorage from 'use-local-storage'
import { render } from 'react-dom';
import Footer from '../components/Footer';
import Image from 'next/image'


// export const getStaticProps = async() => {
//     const aboutText = [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere ligula, ac molestie ante tristique eget. Nam viverra pretium nisi quis imperdiet. Duis mauris arcu, convallis eget risus sed, egestas bibendum erat. Nam dapibus urna metus, in porta dui varius ac. Praesent vel quam felis. Donec vel lorem id leo aliquam rhoncus. Nulla sed varius justo. Sed condimentum, est nec imperdiet sollicitudin, arcu orci tristique lectus, nec suscipit justo tortor non ligula. Quisque a egestas arcu. Morbi nulla elit, sollicitudin nec fringilla ut, facilisis vel sapien.",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, faucibus at pretium eget, viverra id dui. Vivamus faucibus eget nulla in commodo. Phasellus vitae malesuada sapien. Proin eget sem diam. Vivamus a tincidunt odio. Nulla vel facilisis dolor, non pretium nunc. In vestibulum ex libero, eget imperdiet eros lobortis a. Suspendisse sem libero, sollicitudin sit amet magna at, suscipit mattis augue. Donec quis tortor nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae ex dui. Duis arcu ipsum, interdum quis scelerisque eget, pulvinar eu tortor. Donec vitae felis sed risus commodo aliquam tincidunt eget neque. Vivamus in mauris ultrices, maximus leo at, ullamcorper ipsum. Praesent arcu magna, efficitur nec sapien id, imperdiet pellentesque mauris. Etiam imperdiet finibus sagittis.",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum neque a ex hendrerit mattis. Phasellus venenatis pulvinar nisl, in pretium libero fringilla quis. Phasellus at molestie ligula, quis fringilla sapien. Duis vitae ultricies urna. Mauris vestibulum tellus ut dolor gravida, vitae maximus turpis egestas. Aenean at metus id lectus malesuada condimentum. Mauris id blandit elit. Morbi quis lobortis turpis. Nunc tincidunt feugiat vehicula. Aenean semper purus sed facilisis sagittis."
//     ]
//     const src = [
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*",
//         "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
//         "https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg"
//     ]
//     return {
//         props: {about: aboutText, sourceimg: src}
//     }
// }

const Home: NextPage = () => {
    return (
        <div>
            {/* <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
                    ABOUT ME
                </h3>
            </div> */}
             <div className="bg-[#36393f] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80 snap-y snap-mandatory">
                {/* Header */}
                <Header />
                {/* About Me part 1 | General introduction*/}

                <section className="snap-start">
                    <About 
                    title={"A Small Introduction"} 
                    text={"My name is Colin Hwang, and I am a current junior pursuing both a B.Eng and a M.Eng at The Cooper Union for the Advancement of Science and Art. I am studying electrical engineering, and although Cooper Union’s curriculum for engineers is incredibly rigid, I aim to take as many electives that align with my interests and goals as possible. These courses include AI, various machine learning classes, and databases, indicating that I am more interested in software than hardware. This led me down the “computer engineering” track rather than the “hardware” track of electrical engineering. I spent the last summer interning as a software engineer at Applause, where I worked with a team to refine and test an algorithm that will be used for the next generation of VR devices. Using the data collected from testing, my team presented deliverables to a client in a timely and efficient manner. The experience I gained at Applause was invaluable, and I hope to explore my interests and expand my skills further this summer with new software engineering internships. Scroll down to hear a more non-technical introduction about me."} 
                    src={"/../static/CU.webp"}/>
                </section>

                {/* About Me part 2 | talk about experience*/}
                <section className="snap-start">
                    <AltAbout title={"Get To Know Me Better"} 
                    text={"This is a more relaxed introduction, with all the technical stuff aside. I currently live in the upper east side of New York, therefore making my commute to Cooper Union about 20 minutes via the 6 line. I am an introvert at heart. You could lock me in my room with my PC, my bed, and a bathroom for a month, giving me only the necessary things to survive, and I will be happy. I love playing video games, but the only game I currently play (primarily due to the insane workload of Cooper Union), is teamfight tactics. Currently, the things I enjoy doing are spending time with my girlfriend/friends, gaming, and studying game development/full stack development. My taste in music often shifts due to over-listening to certain genres, but as of recently, my favorite music to listen to comes from a Kpop group called Itzy. I enjoy working out, and I wish to be as strong as possible while maintaining a certain degree of athleticism. I never work out legs; not because I’m lazy, but because if I do one squat, my quads will triple in size (slight exaggeration, but very close to the truth). One thing I wish to accomplish by the end of this year is to make my own, very basic and rudimentary, 2D game using Unity. You can view FAQs that no one ever asked me (therefore not making them very frequently asked) by scrolling further down. "} 
                    src={"/../static/me2.jpg"}/>
                </section>            

                {/* About Me part 3 | more relaxed information*/}
                <section className="snap-start">
                        <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                            <h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
                                Potential FAQs!
                            </h3>
                        </div>
                        <div className="relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 py-10 justify-evenly mx-auto items-center">
                            <div className="space-y-5 px-0 md:px-10">
                                <h4 className="text-2xl font-semibold">Favorite Programming Language(s) / Least Favorite Programming Language(s)?</h4>
                                    <p className = "text-md text-justify">
                                        Python and C++, in that order / Matlab.
                                    </p>
                            </div>  


                            <div className="space-y-5 px-0 md:px-10 pt-5">
                                <h4 className="text-2xl font-semibold">Favorite Shows / Movies?</h4>
                                    <p className = "text-md text-justify">
                                        Arcane, Buisiness Proposal, Code Geass, Death Note, HunterxHunter, Hajime no Ippo, Your Lie in April.  
                                    </p>
                            </div>

                            <div className="space-y-5 px-0 md:px-10 pt-5">
                                <h4 className="text-2xl font-semibold">Favorite Color?</h4>
                                    <p className = "text-md text-justify">
                                        I would be be somewhat surprised if you had not guessed it already. Green.
                                    </p>
                            </div>  

                            <div className="space-y-5 px-0 md:px-10">
                                <h4 className="text-2xl font-semibold"></h4>
                                    <p className = "text-md text-justify">
                                        
                                    </p>
                            </div>                              

                            <div className="space-y-5 px-0 md:px-10">
                                <h4 className="text-2xl font-semibold">Favorite Video Game?</h4>
                                    <p className = "text-md text-justify">
                                        5 year old me would have said Pokemon Sapphire. High school me would have said the dark souls triology. Current me says teamfight tactics.
                                    </p>
                            </div>        

                            <div className="space-y-5 px-0 md:px-10 pt-5">
                                <h4 className="text-2xl font-semibold">Dream Job?</h4>
                                    <p className = "text-md text-justify">
                                        To be able to contribute to a game similar to my favorites.
                                    </p>
                            </div>   

                            <div className="space-y-5 px-0 md:px-10 pt-5">
                                <h4 className="text-2xl font-semibold">Favorite Music Artist / Favorite Music Group / Favorite Song?</h4>
                                    <p className = "text-md text-justify">
                                        Joji / Itzy / Wanted U - Joji
                                    </p>
                            </div>

                            <div className="space-y-5 px-0 md:px-10 pt-5">
                                <h4 className="text-2xl font-semibold">Favorite Food / Favorite Desert / Favorite Fruit / Chipotle Order?</h4>
                                    <p className = "text-md text-justify">
                                        Doenjang Jjigae / Brownies served hot with vanilla ice cream on top / Golden Kiwis / Brown rice, double chicken, black beans, tomato salsa, corn, fajitas, cheese, sour cream, lettuce, (sometimes guac), ask for a water cup and fill it with diet coke, take several spoons and forks.
                                    </p>
                            </div>
                        </div>            
                </section>

                <div className = "bg-black sticky bottom-0">
                    <Footer />  
                </div>        
             </div> 
        </div>
    )
}

export default Home;