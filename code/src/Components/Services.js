import React from "react";
import './Services.css';

export default function Services() {
    const ServicesData = [
        {
            title : "Web Design and Development",
            description : "We create stunning and responsive websites tailored to your needs.",
            icon : "🌐"
        },
        {
      title: "Digital Marketing",
      description:
        "Reach more customers through SEO, Google Ads, and targeted digital marketing strategies.",
      icon: "📈",
    },
    {
      title: "Social Media Management",
      description:
        "Grow your brand with professional social media management and content creation.",
      icon: "📱",
    },
    ]
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {ServicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>   
    );
    }