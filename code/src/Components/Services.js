import React from "react";
import './Services.css';
import webDesignImg from '../assets/webdev.jpg';
import digitalMarketingImg from '../assets/marketing.jpg';
import socialMediaImg from '../assets/socialmedia.jpg';

export default function Services() {
    const ServicesData = [
        {
            title : "Web Design and Development",
            description : "We create stunning and responsive websites tailored to your needs.",
            image : webDesignImg
        },
        {
      title: "Digital Marketing",
      description:
        "Reach more customers through SEO, Google Ads, and targeted digital marketing strategies.",
      image: digitalMarketingImg,
    },
    {
      title: "Social Media Management",
      description:
        "Grow your brand with professional social media management and content creation.",
      image: socialMediaImg,
    },
    ]
  return (
    <div className="services-container" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {ServicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    );
    }