import React from "react";
import './Header.css';
import logo from '../assets/cnclogo.jpg';

export default function Header() {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Code and Click Africa Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
            <li><a href="#services" onClick={() => handleNavClick('services')}>Our Services</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact Us</a></li>
            <li><a href="#faqs" onClick={() => handleNavClick('faqs')}>FAQs</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
