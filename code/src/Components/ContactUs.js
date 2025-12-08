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
        setIsFormVisible(!isFormVisible);
    };
    // handler to update form data
    const handleInputChange =(e) => {
        const {name, value} =e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    // handler for submit button inside the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}. Your response has been recorded`);
        setFormData({name: "", email: "", message: ""});
        setIsFormVisible(false);
    }
    return (
         <div className="contact-us-container">
            <h1 className='contact-us-header'>Contact Us</h1>
            <div className="contact-us-content">
                <p>Want more customers, Clients and Sales than you 
                    could handle? Reach out to us today!
                </p>
                {!isFormVisible && (
                <button className="contact-us-button" onClick={handleButtonClick}>Get in Touch</button>
                )}
                {isFormVisible &&(
                    <div className='form-container'>
                        <h2>Tell us about your business</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    Username:
                                    <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange} 
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange} 
                                    />                                    
                                </label>
                            </div>
                            <div>
                                <label>
                                    Message:
                                    <input
                                    type='text'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange} 
                                    />                                    
                                </label>
                            </div>
                            <button type='submit'>Submit Data</button>
                        </form>
                    </div>
                )}
            </div>
         </div>   
    );
 }