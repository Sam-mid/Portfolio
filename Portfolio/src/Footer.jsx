import React from 'react';
import linkedin from '/src/assets/img/linkedin-icon.svg';
import Gmail from '/src/assets/img/Gmail-icon.svg';
import GitHub from '/src/assets/img/GitHub-icon.svg';

const Footer = () => {
    return (
        <footer id="contact"  className="bg-gray-700 text-white text-center px-4 py-4">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-xl" >Neem gerust contact met mij op voor eventuele vragen. Ik ben op de volgende manieren bereikbaar: </p>
            <ul className="flex justify-center space-x-7 p-5">
                <li className="">
                    <a href="mailto:sammiddendorp2002@gmail.com" className="block">
                        <img src={Gmail} alt="Logo" className="h-12"/>
                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300">sammiddendorp2002@gmail.com</span>
                    </a>
                </li>
                <li >
                    <a href="https://www.linkedin.com/in/sam-middendorp-890a1720a/" className="block">
                        <img src={linkedin} alt="Logo" className="h-12"/>
                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300">Sam Middendorp</span>
                    </a>
                </li>
                <li >
                    <a href="https://github.com/Sam-mid" className="block">
                        <img src={GitHub} alt="Logo" className="h-12"/>
                        <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300">Sam-mid</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;

