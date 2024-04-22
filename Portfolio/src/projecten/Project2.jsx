import React from 'react';
import FullStack from '/src/assets/img/FullStack.png';
import HTML from '/src/assets/Logo\'s/HTML_logo.svg';
import CSS from '/src/assets/Logo\'s/CSS_logo.svg';
import JavaScript from '/src/assets/Logo\'s/JavaScript_logo.svg';
import ReactLogo from '/src/assets/Logo\'s/React_logo.svg';
import PHP from '/src/assets/Logo\'s/PHP_logo.svg';




const Project2 = ({ closeModal }) => {
    return (
        <section id="project1" className="flex flex-col justify-center items-center bg-white min-h-screen relative">
            <span className="absolute top-0 right-0 cursor-pointer text-3xl m-4" onClick={closeModal}>&times;</span>
            <h2 className="text-3xl text-center font-bold mt-10 md:mb-24">Project 2</h2>
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
                    <div className="flex flex-wrap items-center justify-center mt-4">
                        <img className="logo mb-4 md:mb-0" src={HTML} alt="HTML logo" title="HTML"/>
                        <img className="logo mb-4 md:mb-0" src={CSS} alt="CSS logo" title="CSS"/>
                        <img className="logo mb-4 md:mb-0" src={JavaScript} alt="JavaScript logo" title="JavaScript"/>
                        <img className="logo mb-4 md:mb-0" src={ReactLogo} alt="React logo" title="React"/>
                        <img className="logo mb-4 md:mb-0" src={PHP} alt="PHP logo" title="PHP"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 order-1 md:order-2 mt-10" style={{display: 'flex', justifyContent: 'center',}}>
                    <iframe
                        className={"rounded-2xl drop-shadow-2xl hover:scale-105"}
                        width="560" // Breedte van de video
                        height="315" // Hoogte van de video
                        src="https://www.youtube.com/embed/" // Vervang VIDEO_ID door de ID van de YouTube-video die je wilt insluiten
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
            </div>
        </section>
    );
};

export default Project2;