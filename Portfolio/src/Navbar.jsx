import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/img/Logo.svg';

const Navbar = () => {
    return (
        <nav className="bg-white p-4 flex flex-col md:flex-row justify-start gap-5 items-center shadow">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-12" />
            </div>
            <ul className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
                <li>
                    <Link to="/" className="text-black font-bold hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-black font-bold hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-black font-bold hover:text-gray-300">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;
