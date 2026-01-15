import React from "react";
import "./Footer.css";
import logo from '../assets/cnclogo.jpg';

export default function Footer() {
    return (
        <footer>
            <div className ="footer">              
                {/* Logo Section */}
                <div className="logo-section">
                    <img
                        src= {logo}
                        alt="Code and Click Africa Logo"                        
                    />
                    <h3>Code and Click Africa</h3>
                    <p>Empowering businesses through digital solutions</p>
                </div>

                {/* Solutions Section */}
                <div className="solutions-section">
                    <h4>Our Solutions</h4>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                        <li>
                            <a href="#faqs">FAQs</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div className ="contact-info-section">
                    <h4>Contact Information</h4>
                    <div className="contact-info-content">
                        <p>
                            <strong>Email:</strong> info@codeandclick.africa
                        </p>
                        <p>
                            <strong>Phone:</strong> +254 797 911 930
                        </p>
                        <p>
                            <strong>Address:</strong> Nairobi, Kenya
                        </p>
                        <p>
                            <strong>Business Hours:</strong> Mon-Fri 9AM-6PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copyright-section">
                <p>&copy; {new Date().getFullYear()} Code and Click Africa. All rights reserved.</p>
            </div>
        </footer>
    );
}