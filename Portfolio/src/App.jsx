import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
