import React, { useState } from 'react';
import MijnFoto from '/src/assets/img/MijnFoto.png';
import InteractieOntwerp from '/src/assets/img/InteractieOntwerp.png';
import FullStack from '/src/assets/img/FullStack.png';
import PlaylistName from '/src/assets/img/PlaylistName.png';

import PhotoShop from '/src/assets/Logo\'s/PhotoShop_logo.svg';
import Illustrator from '/src/assets/Logo\'s/Illustrator_logo.svg';
import InDesign from '/src/assets/Logo\'s/InDesign_logo.svg';
import XDlogo from '/src/assets/Logo\'s/Xd_logo.svg';
import Blender from '/src/assets/Logo\'s/Blender_logo.svg';
import Unity from '/src/assets/Logo\'s/Unity_logo.svg';
import HTML from '/src/assets/Logo\'s/HTML_logo.svg';
import CSS from '/src/assets/Logo\'s/CSS_logo.svg';
import JavaScript from '/src/assets/Logo\'s/JavaScript_logo.svg';
import ReactLogo from '/src/assets/Logo\'s/React_logo.svg';
import PHP from '/src/assets/Logo\'s/PHP_logo.svg';

import Project1 from "./projecten/Project1.jsx";
import Project2 from "./projecten/Project2.jsx";
import Project3 from "./projecten/Project3.jsx";


const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const closeModal = () => setSelectedProject(null); // Functie om modale weergave te sluiten

    return (
        <div>
            {/* Over mij */}
            <section id="aboutme"
                     className="flex flex-col md:flex-row justify-center items-center bg-green-50 min-h-screen md:min-h-auto">
                <div
                    className="mx-auto px-4 flex flex-wrap justify-center items-center md:space-x-8 md:flex-row md:items-center"
                    style={{width: '100%', maxWidth: '100%'}}>
                    <div className="w-full px-4 md:w-1/2 mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Over Mij</h2>
                        <p className="text-xl mb-4">
                            Ik ben Sam Middendorp, een 22-jarige student van de studie Creative Media and Game
                            Technologies. Ik ben creatief en heb een onderzoekende houding. Vooral als het gaat om
                            nieuwe technologieën en ontwikkelingen. Daarnaast heb ik ervaring met planmatig en
                            projectmatig werken in een team.
                        </p>
                        <p className="text-xl mb-4">
                            Ik ben geïnteresseerd in het volledige creatieve proces, van ontwerp tot eindproduct. Met
                            mijn achtergrond als vormgever en mijn kennis als developer breng ik een gevarieerde blik op
                            elk project.
                        </p>
                        <p className="text-xl mb-4">
                            Ik ben op zoek naar een stage als designer en/of front-end developer. Tijdens mijn stage zou
                            ik het liefst meekijken bij zowel de creatieve als technologische kant van een project.
                        </p>
                    </div>
                    <div className="w-full px-4 md:w-1/3">
                        <img src={MijnFoto} alt="Profielfoto" className="w-full h-auto drop-shadow-2xl rounded-2xl" style={{maxWidth: '100%'}}/>
                    </div>
                </div>
            </section>


            {/* Ervaring */}
            <section id="experience" className="flex flex-col items-center justify-center bg-purple-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="w-full px-4 ">
                        <h2 className="text-3xl font-bold mb-4">Mijn ervaring</h2>
                        <p className="text-xl mb-8">
                            Aan het eind van 2023 heb ik mijn propedeuse gehaald. Ik heb een MBO-diploma als
                            mediavormgever en 1,5 jaar ervaring als 3D designer in de VR sector.
                        </p>
                        <p className="text-xl font-bold mb-4">Ik ben bekend met:</p>
                        <div className="flex flex-wrap items-center justify-center mt-4 md:mt-10 md:space-x-4">
                            <img className="logo mb-4 md:mb-0" src={PhotoShop} alt="Photoshop logo" title="Photoshop"/>
                            <img className="logo mb-4 md:mb-0" src={Illustrator} alt="Illustrator logo" title="Illustrator"/>
                            <img className="logo mb-4 md:mb-0" src={InDesign} alt="InDesign logo" title="InDesign"/>
                            <img className="logo mb-4 md:mb-0" src={XDlogo} alt="XD logo" title="XD"/>
                            <img className="logo mb-4 md:mb-0" src={Blender} alt="Blender logo" title="Blender"/>
                            <img className="logo mb-4 md:mb-0" src={Unity} alt="Unity logo" title="Unity"/>
                            <img className="logo mb-4 md:mb-0" src={HTML} alt="HTML logo" title="HTML"/>
                            <img className="logo mb-4 md:mb-0" src={CSS} alt="CSS logo" title="CSS"/>
                            <img className="logo mb-4 md:mb-0" src={JavaScript} alt="JavaScript logo"
                                 title="JavaScript"/>
                            <img className="logo mb-4 md:mb-0" src={ReactLogo} alt="React logo" title="React"/>
                            <img className="logo mb-4 md:mb-0" src={PHP} alt="PHP logo" title="PHP"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projecten */}
            <section id="Projects" className="flex flex-col items-center justify-center bg-blue-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8 text-center mb-12">
                        <h2 className="text-3xl font-bold">Mijn Projecten</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="rounded-2xl p-4 hover:scale-105" onClick={() => handleProjectClick('Project1')}>
                            <h3 className="text-lg font-bold mb-2 text-center">Interactie Ontwerp voor
                                opdrachtgever</h3>
                            <img src={InteractieOntwerp} alt="Interactie Ontwerp"
                                 className="w-full h-80 object-cover rounded-2xl drop-shadow-xl"/>
                        </div>
                        <div className="rounded-2xl p-4 hover:scale-105" onClick={() => handleProjectClick('Project2')}>
                            <h3 className="text-lg font-bold mb-2 text-center">Full Stack project</h3>
                            <img src={FullStack} alt="Full Stack project"
                                 className="w-full h-80 object-cover rounded-2xl drop-shadow-xl"/>
                        </div>
                        <div className="rounded-2xl p-4 hover:scale-105" onClick={() => handleProjectClick('Project3')}>
                            <h3 className="text-lg font-bold mb-2 text-center">AI Playlist name generator</h3>
                            <img src={PlaylistName} alt="AI Playlist name generator"
                                 className="w-full h-80 object-cover rounded-2xl drop-shadow-xl"/>
                        </div>
                    </div>
                </div>
            </section>


            {/* Projectinformatie */}
            <div id="Project1">
                {selectedProject === 'Project1' && <Project1 closeModal={closeModal}/>}
            </div>
            <div id="Project2">
                {selectedProject === 'Project2' && <Project2 closeModal={closeModal}/>}
            </div>
            <div id="Project3">
                {selectedProject === 'Project3' && <Project3 closeModal={closeModal}/>}
            </div>
        </div>
    );
};

export default Home;
