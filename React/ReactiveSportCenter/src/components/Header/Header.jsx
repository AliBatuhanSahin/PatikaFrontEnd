import React, { useState } from 'react';
import './Header.css'; 
import logo from './../../assets/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü açık mı kapalı mı kontrolü için state tanımlayın

    // Menüyü açma/kapama işlevi
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Sayfa scroll edildiğinde navbar rengini değiştirme işlevi
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector("#nav-blue");
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = "#355592";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });

    return (
        <header className="header">
            <div id="nav-blue"></div>
            <div className="header-container">
                {/* NAVBAR */}
                <nav className="nav-bar" id="nav-bar">
                    <div className="logo">
                        <img src={logo} alt="trainer" />
                    </div>
                    <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#classes">Classes</a>
                            </li>
                            <li>
                                <a href="#trainer">Trainer </a>
                            </li>
                            <li>
                                <a href="#review">Review </a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#join-us">
                                    <span> JOIN US </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className="hamburger-icon">&#9776;</div>
                    </div>
                </nav>
                {/* HERO SECTION */}
                <section className="hero-section">
                    <h5>
                        <span>POWERFULL</span>
                    </h5>
                    <h1>
                        <span>Group</span>
                        <span>Practise</span>
                        <span>With Trainer</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ab
                        laudantium nisi praesentium inasa dolore adipisci eius natus minima?
                        Quas obcaecati hic assumenda nihil et quasi odio magnam vitae architecto.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae ullam?
                    </p>
                    <div className="hero-section-buttons">
                        <button className="btn-signup"> Sing Up </button>
                        <button className="btn-details"> Details </button>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;
