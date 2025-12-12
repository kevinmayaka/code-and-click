import React from "react";
import './Faqs.css';

export default function Faqs() {
    return(
        <div className="FAQs Component">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h3>What services do you offer?</h3>
                <p>We offer a wide range of digital marketing services including SEO,
                    social media management, content creation, and paid advertising campaigns.
                </p>
            </div>
            <div className="faq-item">
                <h3>How can I get started?</h3>
                <p>You can get started by contacting us through our Contact Us page. 
                    We will schedule a consultation to discuss your needs and goals.</p>
            </div>
            <div className="faq-item">
                <h3>What is your pricing model?</h3>
                <p>Our pricing model is flexible and depends on the specific services you require. 
                    We offer both project-based and retainer-based pricing options.</p>
            </div>
            <div className="faq-item">
                <h3>How do you measure success?</h3>
                <p>We measure success through key performance indicators (KPIs) such as website traffic, 
                    conversion rates, and return on investment (ROI). We provide regular reports to keep you informed.</p>
            </div>
            <div className="faq-item">
                <h3>Do you offer customized solutions?</h3>
                <p>Yes, we tailor our services to meet the unique needs of each client. 
                    We work closely with you to develop a strategy that aligns with your business objectives.</p>
            </div>  
            <div className="faq-item">
                <h3>What industries do you specialize in?</h3>
                <p>We have experience working with a variety of industries including retail, healthcare, technology, 
                    and hospitality. Our team is adaptable and can cater to the specific needs of different sectors.</p>
            </div>        
        </div>
    )
}