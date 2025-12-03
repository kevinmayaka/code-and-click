import React from "react";
import './Home.css';

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application.</p>
    </div>
  );
}