import React from 'react';
import './ContactUs.css';

export default function ContactUs() {

    // handler to open Calendly in a new page
    const handleButtonClick = () => {
        window.open('https://calendly.com/kevinabuga3', '_blank');
    };

    return (
        <div className="contact-us-container" id="contact">
            <h1 className='contact-us-header'>Contact Us</h1>
            <div className="contact-us-content">
                <div className='contact-us-tagline'>
                    <p>Want more customers, Clients and Sales than you 
                        could handle? Reach out to us today!
                    </p> 
                </div>       
                <button className="contact-us-button" onClick={handleButtonClick}>Book a Meeting</button>                
            </div>          
        </div>   
    );
}