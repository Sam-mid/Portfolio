import React from 'react';
import InteractieOntwerp from '/src/assets/img/InteractieOntwerp.png';
import InDesign from '/src/assets/Logo\'s/InDesign_logo.svg';
import Illustrator from '/src/assets/Logo\'s/Illustrator_logo.svg';
import XDlogo from "/src/assets/Logo\'s/Xd_logo.svg";
import InteractiePDF from '/src/assets/pdf/Sam-Middendorp-interactieontwerp.pdf';


const Project1 = ({ closeModal }) => {
    return (
        <section id="project1" className="flex flex-col justify-center items-center bg-white min-h-screen relative">
            <span className="absolute top-0 right-0 cursor-pointer text-3xl m-4" onClick={closeModal}>&times;</span>
            <h2 className="text-3xl text-center font-bold mt-10 md:mb-24">Interactie Ontwerp</h2>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
                <div className="w-full md:w-1/2 px-4 order-2 md:order-1">
                    <p className="text-lg mt-10 mb-4">Dit was een project voor een school,
                        De opdracht was het maken van een reserveringssysteem voor een opdrachtgever.
                        Het eerste onderdeel hiervan was het maken van een interactieontwerp.
                        Dit document legt de ontwerpfase van begin tot eind vast en is compleet met user stories,
                        sitemap, test met de opdrachtgever, wireframes en styleguide.
                    </p>
                    <p className="text-lg mb-4">
                        Dit soort opdracht is echt waar mijn interesse ligt, vooral omdat ik hier mijn ontwerpervaring  en technische kennis kan combineren. <br/>
                    </p>
                    <p className="text-lg font-bold mb-4">
                        Dit project is gemaakt met: <br/>
                    </p>
                    <div className="flex flex-wrap items-center mt-4">
                        <img className="logo mb-4 md:mb-0" src={InDesign} alt="InDesign logo" title="InDesign"/>
                        <img className="logo mb-4 md:mb-0" src={Illustrator} alt="Illustrator logo"
                             title="Illustrator"/>
                        <img className="logo mb-4 md:mb-0" src={XDlogo} alt="XD logo" title="XD"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 order-1 md:order-2 mt-10">

                    <a href={InteractiePDF} target="_blank" rel="noopener noreferrer ">
                        <img src={InteractieOntwerp} alt="Voorbeeld" className="w-full h-auto drop-shadow-2xl rounded-2xl hover:scale-105"/>
                        <p className="text-center text-lg font-bold mt-4">Klik op de afbeelding voor het interactie ontwerp</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project1;






