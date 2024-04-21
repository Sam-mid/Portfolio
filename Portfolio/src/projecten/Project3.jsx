import React from 'react';
import PlaylistName from '/src/assets/img/PlaylistName.png';


const Project3 = ({ closeModal }) => {
    return (
        <section id="project1" className="flex flex-col justify-center items-center bg-white h-screen relative">
            <span className="absolute top-0 right-0 cursor-pointer text-3xl m-4" onClick={closeModal}>&times;</span>
            <h2 className="text-3xl font-bold mb-52">Project 3</h2>
            <div className=" mx-72 px-4 flex justify-around">
                <div className=" md:w-1/2 px-4">
                    <img src={PlaylistName} alt="Profielfoto" className=" drop-shadow-2xl rounded-2xl"/>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <p className="text-lg mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                        incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum."
                    </p>
                    <p className="text-lg mb-4">
                        Dit project is gemaakt met: <br/>
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                        xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum."
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Project3;
