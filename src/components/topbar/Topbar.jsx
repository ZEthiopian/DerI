import './topbar.scss';


import Button from '@mui/material/IconButton';
import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
export default function Topbar({ menuOpen, setMenuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Der Innovations'],
    });
  }, []);
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="./assets/der1.png" alt="Der Innovation" />
          </a>
          <h1>
            <span ref={textRef}></span>
          </h1>
        </div>
        <div className="right">
          <div className="rightContainer">
            <Button variant="contained" href="#intro">
              HOME
            </Button>
            <Button variant="contained" href="#portfolio">
             MISSION
            </Button>
            <Button href="#works"> PROJECTS</Button>
            <Button href="#testimonials">OUR VISION</Button>
            <Button href="#contact">CONTACT</Button>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
