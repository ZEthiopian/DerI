import './Home.scss';
import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h5>
            Our story began in 2019, Back then we were just dreamers striving to
            play vital roles in the
            Our story began in 2019. Back then we were just dreamers striving to
            play vital roles in the IT industry. However, we became more
            & more fascinated by innovative ideas pushing us to the world 
            of a whole large tech industry. Today, we are determined to address
            challenges using innovative ideas & technological products in
            Ethiopia & abroad. The Word ‘Der’ from ‘Der Innovations’ is
            an acronym after the famous Ethiopian science fiction book
            ‘Dertogada’.
          </h5>
          <h1>"Give wings to your imagination"</h1>
          <h3>
            Innovation <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
