import React from 'react';
import solutionImage1 from "./img/card-header-5.png";
import solutionImage2 from "./img/card-header-6.png";
import solutionImage3 from "./img/card-header-7.png";
import solutionImage4 from "./img/card-header-8.png";

const Solutions = () => {
  return (
    <div className='solutions'>
      <div>
        <p>SOLUTIONS</p>
        <h3>Veon agents for your work</h3>
      </div>

      <div className='solution-grid'>
        <div>
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/card-header-5_qxjb7p.png" alt="Analytics Agent" />
          <h4>Analytics Agent</h4>
          <h5>Uncovering trends, patterns, and actionable insights</h5>
        </div>

        <div>
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/card-header-6_hx4zw0.png"alt="Predictive Agent" />
          <h4>Predictive Agent</h4>
          <h5>Helping you stay ahead of market trends, detect anomalies, and make proactive decisions.</h5>
        </div>
      </div>

      <div className='solution-grid2'>
        <div>
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/card-header-7_fbwoxs.png" alt="Smart Automation" />
          <h4>Smart Automation</h4>
          <h5>Handles repetitive and time-consuming tasks effortlessly, from scheduling to data entry.</h5>
        </div>

        <div>
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043847/card-header-8_djnye4.png" alt="Conversation Agent" />
          <h4>Conversation Agent</h4>
          <h5>Provides human-like responses for customer support and communication.</h5>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
