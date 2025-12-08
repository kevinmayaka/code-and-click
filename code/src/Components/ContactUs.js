 import React, {useState} from 'react';
 import './ContactUs.css';

 export default function ContactUs() {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // handler to toggle form visibility
    const handleButtonClick = () => {
        setIsFormVisible(true);
    };
    // handler to update form data
    const handleInputChange =(e) => {
        const {name, value} =e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
         <div className="contact-us-container">
            <h1 className='contact-us-header'>Contact Us</h1>
            <div className="contact-us-content">
                <p>Want more customers, Clients and Sales than you 
                    could handle? Reach out to us today!
                </p>
                <button className="contact-us-button">Get in Touch</button>
            </div>
         </div>   
    );
 }