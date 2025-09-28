import React from 'react';
import arrows from './img/arrow-buttons.png';
import testimonialImage from './img/testimonial-image.png';

const Testimonial = () => {
  return (
    <div className='testimonials-main'>
        <div className='testimonial'>
            <p>TESTIMONIAL</p>
            <h3>From our community</h3>
            <p style={{color:"#FFFFFF"}}>Real businesses and professionals trust Veon AI. <br/>
Here’s what they have to say about their experience.</p>
            <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043846/arrow-buttons_a780wg.png" alt=""  className='arrows'/>

        </div>
        <div className='testimonials-1'>
            <h4>Veon AI has completely transformed the<br/> way we work. Now, Veon takes care of<br/> the repetitive work, and I can focus on strategy and execution.</h4>
            <div className='testimonials-2'>
                <div>
                <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043850/testimonial-image_ddtgrl.png" alt="" />
                </div>
                <div className='testimonials-3'>
                    <h5>Michael Patel</h5>
                    <p>Finovate Group</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
