import React from 'react';

import './Mission.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
     
      <div className='left'>
      <h1>Our Mission</h1>
      <h4>is to inspire & nurture people through tech based innovations - one person & one neighborhood at a time.</h4>
      <h5>“We are confident that we will be your number one choice in the African tech market!”</h5>
      </div>
      <div className='right'>
      <div className="imgContainer">
          <img src="assets/whats-new.png" alt="" />
        </div>
      </div>
    </div>
  );
}
