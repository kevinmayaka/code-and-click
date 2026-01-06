import React, { useState } from "react";
import "./Faqs.css";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of digital marketing services including SEO, social media management, content creation, and paid advertising campaigns.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by contacting us through our Contact Us page. We will schedule a consultation to discuss your needs and goals.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing model is flexible and depends on the specific services you require. We offer both project-based and retainer-based pricing options.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, and return on investment (ROI). We provide regular reports to keep you informed.",
    },
    {
      question: "Do you offer customized solutions?",
      answer:
        "Yes, we tailor our services to meet the unique needs of each client. We work closely with you to develop a strategy that aligns with your business objectives.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience working with a variety of industries including retail, healthcare, technology, and hospitality. Our team is adaptable and can cater to the specific needs of different sectors.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FAQs-Component">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
              ▼
            </span>
          </div>

          <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
