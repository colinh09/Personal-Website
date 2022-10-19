import type { NextPage } from 'next'
import { homedir } from 'os'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const Home: NextPage = () => {
    return (
        <div>
             <div className="bg-[#36393f] text-white h-screen overflow-y-auto z-0">
                {/* ----------------- HEADER ---------------------*/}
                <Header />
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 lg:pb-10 pb-5 justify-evenly mx-auto items-center">
                    <h3 className="relative top-15 uppercase tracking-[20px] text-gray-500 text-2xl ">
                        PROJECTS
                    </h3>
                </div>
                {/* ----------------- HEADER ---------------------*/}




                {/* ----------------- DATA STRUCTURES AND ALGORITHMS ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-1 justify-evenly mx-auto items-center">
                    <h3 className="relative lg:top-5 top-2 uppercase tracking-[8px] text-gray-500 text-xl underline decoration-[#000000]/50">
                        Data Structures and Algorithms
                    </h3>
                </div>

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "Checkers-Playing AI" skills = "OOP, AI, Minimax Search, Heuristic Function, C++" link = {"https://github.com/colinh09/AI-Checkers"} 
                    bullet_one="Implemented a game playing program in C++ that plays checkers against the user with the capability to win against
                    an above average player. Capable of making moves two/three turns in advance."
                    bullet_two="Combines iterative deepening, minimax search with alpha beta pruning, and a heuristic function to search the game
                    space for ideal moves." />
                    <ProjectCard title = "Hash Table Implementation" 
                    skills = "C++, Hash Table, OOP" 
                    link = {"https://github.com/colinh09/DSA2-Programs/tree/main/Project%201"} 
                    bullet_one="Program one of the second data structure and algorithms (DSA 2) class taken at The Cooper Union"
                    bullet_two="Wrote a hash table class that will then be used to read a dictionary provided by my professor, and with that dictionary, a document was spell checked for valid words." 
                    />
                </div>

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "Priority Queue Implmentation" skills = "C++, OOP, Priority Queue, Binary Heap, Pointers" link = {"https://github.com/colinh09/DSA2-Programs/tree/main/Project%202:%20Priority%20Queue"} 
                    bullet_one="Program two of the second data structure and algorithms (DSA 2) class taken at The Cooper Union"
                    bullet_two="Wrote a 'heap' class that implements a priority queue that utilizes a binary heap. To handle pointers to any type of data, void pointers were used. The heap makes use of the hash table class written for the first project." 
                    />
                    <ProjectCard title = "Dijkstra's Algorithm Implementation" 
                    skills = "Graphs, Binary Heap, Dikstra's Algorithm, Greedy Algorithm, OOP" 
                    link = {"https://github.com/colinh09/DSA2-Programs/tree/main/Project%203:%20Dijsktra"} 
                    bullet_one="Program three of the second data structure and algorithms (DSA 2) class taken at The Cooper Union"
                    bullet_two="Implmented Dijkstra's algorithm to greedily solve the single-source shortest-path problem. The program will output the shortest path that can be taken in a specified graph with a specified starting vertex. The program makes use of the binary heap class written for the second project." 
                    />
                </div>
                {/* ----------------- DATA STRUCTURES AND ALGORITHMS ---------------------*/}        




                {/* ----------------- MACHINE LEARNING ---------------------*/}
                <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 pb-20 justify-evenly mx-auto items-center">
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

                <div className = "w-full flex xl:pt-15 lg:pt-10 md:pt-5 pt-5 flex-col md:text-left md:flex-row justify-evenly mx-auto items-center">
                    <ProjectCard title = "Linear Regression Analysis" 
                    skills = "Frequentist Machine Learning, Linear Regression, Ridge Regression, Lasso Regression, Python" 
                    link = {"https://github.com/colinh09/Freq-Machine-Learning/tree/main/Project1"} 
                    bullet_one="Performed linear regression analysis on two datasets: prostate data and concrete data. Plain linear regression, ridge regression, and lasso regression were used and compared against each other."
                    bullet_two="Utilized the results from Lasso regression and its corresponding lasso plot to determine which features possessed the highest correlation with the dataset based off coefficent values found by the model.
                    Learn more by clicking the github link below. A summary of results is given at the bottom of the .pynb file." 
                    />
                    <ProjectCard title = "Logistic Regression Analysis" skills = "Binary Classification, Logistic Regression, Stochastic Gradient Descent, L1/L2 regularization penalty" link = {"https://github.com/colinh09/Freq-Machine-Learning/tree/main/Project2"} 
                    bullet_one="Performed logistic regression analysis on a south african heart disease dataset, heart failure dataset, and dry bean dataset (dataset for identifying type of dry bean :D)"
                    bullet_two="Both the south african heart dataset and heart failure dataset are both binary classified. Therefore, analysis involved applying logistic regression using stochastic gradient descent as the 
                    optimization algorithm, with and without L2 regularization penalty. The dry bean dataset is a multinominal classified. Therefore, analysis involved applying logistic regression with and without L2-penalty. Learn more
                    by clicking the github link below. A summary of results is given at the bottom of the .pynb file."
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
                    <ProjectCard title = "LinkedIn Clone" skills = "Full Stack, React, Firebase, Redux, JavaScript" link = {"https://github.com/colinh09/linkedin-clone"} 
                    bullet_one="A LinkedIn clone that does not fully resemble the actual website of LinkedIn, but implements many key features. These features include: a login screen that persists your login state
                    until you log out, a 'feed' section that updates in real time as a user sends a post, overall feel and look similar to LinkedIn itself."
                    bullet_two="Used this project as a way to gain familiarity with React and interacting with a backend such as Firebase. " 
                    />
                    <ProjectCard title = "This Website lol" skills = "Next.js, TailwindCSS, Framer Motion, TypeScript" link = {"https://github.com/colinh09/personal-website"} 
                    bullet_one="While this project is just the current website I am using as a portfolio, it was actually my first Next.js project. I wanted also wanted to gain familiarity with type script as I have
                    only used javascript up until this point, and I wanted to try using React CSS libraries such as TailwindCSS, Framer Motion, and Typewriter."
                    bullet_two="This is also the first time I have deployed a website to a custom domain (colinhwang.dev), and I used vercel to host the website itself. Building this website was quite time consuming
                    , especially since there are still a few styling and responsiveness issues I have to resolve, but I learned a lot about react/next.js and web development from it." 
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
                <div className = "bg-black sticky bottom-0 text-white">
                    <Footer />  
                </div>                                               
             </div>
        </div>
    )
}

export default Home;