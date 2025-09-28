import React from 'react';
import AboutImage from './img/About-image.png';

function About() {
  return (
    <div className='about'>
        <div className="vertical-line"></div>
        <div>
        <p style={{ color: "#D4F39A",fontSize:"20px" }}>ABOUT VEON</p>

        <h3>The future of intelligent<br/> automation and decision-<br/>making.</h3>
        <p>
          In a world driven by data, efficiency, and automation, we believe AI
          should be more than just a tool—it should be an intelligent partner
          that works alongside you, adapting, learning, and evolving to meet
          your needs. Built on advanced machine learning and adaptive
          intelligence, Veon AI continuously evolves to meet the unique needs of individuals 
          and Business.
        </p>
      </div>
      <div className='AboutImage'>
        <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/About-image_wdmzew.png" alt=""  />
      </div>
    </div>
  );
}

export default About;



