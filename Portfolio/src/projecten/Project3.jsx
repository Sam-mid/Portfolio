import React from 'react';
import PlaylistName from '/src/assets/img/PlaylistName.png';


const Project3 = ({ closeModal }) => {
    return (
        <section id="project1" className="flex flex-col justify-center items-center bg-white min-h-screen relative">
            <span className="absolute top-0 right-0 cursor-pointer text-3xl m-4" onClick={closeModal}>&times;</span>
            <h2 className="text-3xl text-center font-bold mt-10 md:mb-24">Ai Playlist Name generator</h2>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
                <div className="w-full md:w-1/2 px-4 order-2 md:order-1">
                    <p className="text-lg mt-10 mb-4">"Ook dit was een schoolproject, Waarin ik gebruik moesten maken van de API van OpenAi om een website te maken met een taalmodel.
                        Mijn uiteindelijke project is een website die namen genereerd voor je spotify playlist.
                        Dit gebeurt op basis van een prompt in de code.
                        Ook heb ik gebruik gemaakt van de Spotify API om actuele muziekgenres op te halen op de website.
                        De volledige code van het project vind je op mijn <a href="https://github.com/Sam-mid/AI-PlaylistName-Generator">GitHub pagina</a>.
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
                    <a href="https://playlist-name-generator-2tabk.ondigitalocean.app/" target="_blank"
                       rel="noopener noreferrer ">
                        <img src={PlaylistName} alt="Voorbeeld"
                             className="w-full h-auto drop-shadow-2xl rounded-2xl hover:scale-105"/>
                        <p className="text-center text-lg font-bold mt-4">Klik op de afbeelding om naar de site te gaan.</p>

                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project3;
