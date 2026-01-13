import React, { useState } from "react";
import "./Faqs.css";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
  question: "What services do you offer?",
  answer:
    "We deliver comprehensive, results-driven digital marketing solutions designed to scale your business profitably. Our core services include SEO for long-term organic growth, paid advertising on Google and social platforms for immediate results, social media management, and high-impact content creation. More importantly, we do not offer isolated services, we build integrated growth systems that attract, convert, and retain customers consistently.",
},
{
  question: "How can I get started?",
  answer:
    "Getting started begins with a strategic consultation where we analyze your business, your market, and your growth objectives. From there, we develop a clear action plan outlining exactly how we will increase your leads, sales, and online visibility. Once approved, our team handles everything end-to-end so you can focus on running your business while we focus on scaling it.",
},
{
  question: "What is your pricing model?",
  answer:
    "Our pricing is structured around value, impact, and return on investment rather than generic packages. We offer both project-based engagements and ongoing growth retainers depending on your objectives. Every proposal is custom-built, ensuring your budget is invested only in strategies that directly contribute to revenue growth.",
},
{
  question: "How do you measure success?",
  answer:
    "We measure success using business-critical metrics such as qualified leads, conversion rates, customer acquisition cost, and overall return on investment. Every campaign is tracked, optimized, and refined continuously to ensure performance improves over time. You receive clear, executive-level reports that show not just activity - but real business impact.",
},
{
  question: "Do you offer customized solutions?",
  answer:
    "Yes. Everything we do is built around your specific business model, market, and growth goals. We do not believe in templates or one-size-fits-all strategies because they do not produce exceptional results. Your strategy is designed from the ground up to create a competitive advantage and sustainable growth.",
},
{
  question: "What industries do you specialize in?",
  answer:
    "We work with ambitious brands across industries including technology, healthcare, professional services, hospitality, e-commerce, and local businesses. Our strategies are industry-adaptive, meaning we apply proven growth frameworks while tailoring execution to your market dynamics. What matters most to us is not the industry - but the opportunity to scale a business with strong potential.",
 },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FAQs-Component" id="faqs">
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
