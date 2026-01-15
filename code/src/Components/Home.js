import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollWidth}%` }}></div>
      <div className="landing" id="home">
      
        {/* Background Effects */}
        <div className="bg-grid"></div>
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

      <div className="content">
        <div className="panel">
          <h1>Code and Click Africa</h1>
          <h2>Where Strategy Meets Digital Growth</h2>
          <p>
            Empowering businesses through digital solutions that drive growth,
            visibility, and measurable results across Africa and beyond.
          </p>
        </div>
      </div>

    </div>
    </>
  );
}
