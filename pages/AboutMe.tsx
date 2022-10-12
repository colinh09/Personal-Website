import type { NextPage } from 'next'
import React from 'react';
// import createReactContext, { type Context } from 'create-react-context';
import { homedir } from 'os'
import About from '../components/About';
import AltAbout from '../components/AltAbout';
import Header from '../components/Header';
import useLocalStorage from 'use-local-storage'
import { render } from 'react-dom';

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
             <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80 snap-y snap-mandatory">
                {/* Header */}
                <Header />
                {/* About Me part 1 | General introduction*/}

                <section className="snap-start">
                    <About title={"title1"} text={"testing1"} src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"}/>
                </section>

                {/* About Me part 2 | talk about experience*/}
                <section className="snap-start">
                    <AltAbout title={"title2"} text={"testing2"} src={"https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg"}/>
                </section>            

                {/* About Me part 3 | more relaxed information*/}
                <section className="snap-start">
                    <About title={"title3"} text={"testing3"} src={"https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
                </section>

             </div>
        </div>
    )
}

export default Home;