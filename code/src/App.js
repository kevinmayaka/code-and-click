import React from 'react';
import './App.css';
import Home from'./Components/Home';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Home />
        <Services />
        <ContactUs />
        <Faqs />
        <Footer />
    </div>
  );
}

export default App;
