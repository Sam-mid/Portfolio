import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/img/Logo.svg';

const Navbar = () => {
    return (
        <nav className="bg-white p-4 flex flex-col md:flex-row justify-start gap-5 items-center text-center drop-shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-12" />
            </div>
            <ul className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <li>
                    <a href="#aboutme" className="text-black font-bold hover:text-gray-300">OverMij</a>
                </li>
                <li>
                    <a href="#experience" className="text-black font-bold hover:text-gray-300">Ervaring</a>
                </li>
                <li>
                    <a href="#projects" className="text-black font-bold hover:text-gray-300">Projecten</a>
                </li>
                <li>
                    <a href="#contact" className="text-black font-bold hover:text-gray-300">Contact</a>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;
