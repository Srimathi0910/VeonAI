import React from 'react';
import FeaturesImage1 from "./img/card-header.png"
import FeaturesImage2 from "./img/card-header-1.png"
import FeaturesImage3 from "./img/card-header-2.png"
import FeaturesImage4 from "./img/card-header-3.png"
import FeaturesImage5 from "./img/card-header-4.png"

const Features = () => {
  return (
    <div>
        <div className='features'>
            <p>FEATURES</p>
            <h3>How Veon can help you</h3>
        </div>
        <div className='feature-grid1'>
            <div>
                <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043847/card-header_nqswox.png" alt="" />
                <h5>Adaptive Learning</h5>
                <p>Improves over time based on real-world <br /> interactions.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043847/card-header-1_hf2oqv.png" alt="" />
                <h5>Seamless Integration</h5>
                <p>Works with your favorite tools and<br /> platforms.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/card-header-2_bbykpq.png" alt="" />
                <h5>Enterprise-Grade Security</h5>
                <p>Keeps your data protected with top-tier<br /> encryption.</p>
            </div>
        </div>
        <div className='feature-grid2'>
            <div>
                <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/card-header-3_ireu3t.png" alt="" />
                <h5>Scalability</h5>
                <p>Whether you're a startup or an enterprise, Veon AI grows with you.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/card-header-4_fxjjvg.png" alt="" />
                <h5>Intuitive Interface</h5>
                <p>No complex coding required—just powerful results.</p>
            </div>

        </div>

      
    </div>
  )
}

export default Features
