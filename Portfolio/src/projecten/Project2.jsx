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
            <h2 className="text-3xl text-center font-bold mt-10 md:mb-24">Full Stack project</h2>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
                <div className="w-full md:w-1/2 px-4 order-2 md:order-1">
                    <p className="text-lg mt-10 mb-4">Ook dit is een schoolproject waarin de opdracht was om een
                        volledige webservice te maken. Met eigen front/back-end. Ik heb in dit project een website
                        gebouwd met een lijstweergave van voetbalclubs in de regio Den Haag.
                    </p>
                    <p className="text-lg mb-4">
                        De website is compleet met CRUD-functionaliteit en heeft ook nog extra features zoals zoek/
                        filter functie en pop-up weergave van alle afbeeldingen. De webite staat helaas niet live maar is wel te bekijken in de bijstaande video.
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
                <div className="w-full md:w-1/2 px-4 order-1 md:order-2 mt-10"
                     style={{display: 'flex', justifyContent: 'center',}}>
                    <iframe
                        className={"rounded-2xl drop-shadow-2xl hover:scale-105"}
                        width="560" // Breedte van de video
                        height="315" // Hoogte van de video
                        src="https://www.youtube.com/embed/lYcNxmSLAio" // Vervang VIDEO_ID door de ID van de YouTube-video die je wilt insluiten
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