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
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 lg:pb-10 pb-5 justify-evenly mx-auto items-center">
                    <h3 className="relative top-15 uppercase tracking-[20px] text-gray-500 text-2xl ">
                        PROJECTS
                    </h3>
                </div>
                {/* ----------------- HEADER ---------------------*/}




                {/* ----------------- DATA STRUCTURES AND ALGORITHMS ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-10 justify-evenly mx-auto items-center">
                    <h3 className="relative lg:top-5 top-2 uppercase tracking-[8px] text-gray-500 text-xl underline decoration-[#000000]/50">
                        Data Structures and Algorithms
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "Checkers Playing AI" skills = "OOP, AI, Minimax Search, Heuristic Function, C++" link = {"https://github.com/colinh09/AI-Checkers"} 
                    bullet_one="Implemented a game playing program in C++ that plays checkers against the user with the capability to win against
                    an above average player. Capable of making moves two/three turns in advance."
                    bullet_two="Combines iterative deepening, minimax search with alpha beta pruning, and a heuristic function to search the game
                    space for ideal moves." />
                    <ProjectCard title = "Game Review Sentiment Analysis" 
                    skills = "Sentiment Analysis, TensorFlow, Recurrent Nerual Network, LSTMs, Stochastic Gradient Descent" 
                    link = {"https://github.com/colinh09/Natural-Language-Processing/tree/main/Sentiment-Analysis"} 
                    bullet_one="Utilized Python and Keras, TensorFlow’s deep learning API, to develop a neural network with the task of
                    predicting game reviews. The neural network was trained and tested using a dataset consisting of approximately
                    5,000 game reviews from GameStop’s website."
                    bullet_two="Experimented with various models and hyperparameters to arrive at an architecture consisting of an embedding
                    layer that received one-hot vectors as input, two fully connected recurrent neural networks as hidden layers, and a
                    dense layer with SoftMax activation as the output layer. The model achieved an accuracy of 93.81%." 
                    />
                </div>

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "Neural Network - From Scratch" skills = "Neural Network, Machine Learning, Confusion Matrix, Back Propagation" link = {"https://github.com/colinh09/AI-Neural-Network"} 
                    bullet_one="Developed a program that allows for the testing and training of a neural network consisting of one hidden layer. The program prompts the user for a set of parameters, such as the number of epochs, a learning rate, and a training
                    file, that will determine how well the neural network learns."
                    bullet_two="Training is done with back-propagation, and an output file with several metrics will display how well the trained
                    neural network performs on a testing file." 
                    />
                    <ProjectCard title = "project title" 
                    skills = "linked priority hashmap queue sort linkeded list O(1)" 
                    link = {"https://github.com/colinh09"} 
                    bullet_one="bullet one"
                    bullet_two="bullet two" 
                    />
                </div>

                {/* ----------------- DATA STRUCTURES AND ALGORITHMS ---------------------*/}        




                {/* ----------------- MACHINE LEARNING ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-5 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-xl underline decoration-[#000000]/50">
                        Machine Learning
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                <ProjectCard title = "Game Review Sentiment Analysis" 
                    skills = "Sentiment Analysis, TensorFlow, Recurrent Nerual Network, LSTMs, Stochastic Gradient Descent" 
                    link = {"https://github.com/colinh09/Natural-Language-Processing/tree/main/Sentiment-Analysis"} 
                    bullet_one="Utilized Python and Keras, TensorFlow’s deep learning API, to develop a neural network with the task of
                    predicting game reviews. The neural network was trained and tested using a dataset consisting of approximately
                    5,000 game reviews from GameStop’s website."
                    bullet_two="Experimented with various models and hyperparameters to arrive at an architecture consisting of an embedding
                    layer that received one-hot vectors as input, two fully connected recurrent neural networks as hidden layers, and a
                    dense layer with SoftMax activation as the output layer. The model achieved an accuracy of 93.81%." 
                    />
                    <ProjectCard title = "Neural Network - From Scratch" skills = "Neural Network, Machine Learning, Confusion Matrix, Back Propagation" link = {"https://github.com/colinh09/AI-Neural-Network"} 
                    bullet_one="Developed a program that allows for the testing and training of a neural network consisting of one hidden layer. The program prompts the user for a set of parameters, such as the number of epochs, a learning rate, and a training
                    file, that will determine how well the neural network learns."
                    bullet_two="Training is done with back-propagation, and an output file with several metrics will display how well the trained
                    neural network performs on a testing file." 
                    />
                </div>
                {/* ----------------- MACHINE LEARNING ---------------------*/}          


                {/* ----------------- WEB APPS ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-xl underline decoration-[#000000]/50">
                        Web Apps / Web Development
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
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
                    <h3 className="relative top-24 uppercase tracking-[8px] text-gray-500 text-xl underline decoration-[#000000]/50">
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