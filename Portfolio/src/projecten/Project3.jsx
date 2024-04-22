import React from 'react';
import PlaylistName from '/src/assets/img/PlaylistName.png';


const Project3 = ({ closeModal }) => {
    return (
        <section id="project1" className="flex flex-col justify-center items-center bg-white min-h-screen relative">
            <span className="absolute top-0 right-0 cursor-pointer text-3xl m-4" onClick={closeModal}>&times;</span>
            <h2 className="text-3xl text-center font-bold mt-10 md:mb-24">Interactie Ontwerp voor opdrachtgever</h2>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
                <div className="w-full md:w-1/2 px-4 order-2 md:order-1">
                    <p className="text-lg mt-10 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum."
                    </p>
                    <p className="text-lg font-bold mb-4">
                        Dit project is gemaakt met: <br/>
                    </p>
                    <div className="flex flex-wrap items-center mt-4">
                        - NodeJS <br/>
                        - Tailwind CSS <br/>
                        - Spotyfy API <br/>
                        - OpenAI API <br/>

                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 order-1 md:order-2 mt-10">
                    <a href="https://playlist-name-generator-2tabk.ondigitalocean.app/" target="_blank" rel="noopener noreferrer ">
                        <img src={PlaylistName} alt="Voorbeeld" className="w-full h-auto drop-shadow-2xl rounded-2xl hover:scale-105"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project3;
