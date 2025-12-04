import React from "react";
import './Home.css';

export default function Home() {
  return (
    <div className="landing">
      <header>
         <img src="https://codetheweb.blog/assets/img/icon2.png"></img>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="team">Our Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <h1>Code and Click Africa</h1>
        <p>This is the main landing page of our application.</p>
      </div>
    </div>
  );
}