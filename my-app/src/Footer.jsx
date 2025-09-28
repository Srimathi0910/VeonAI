import React from 'react';
import logo from './img/logo.png'

const Footer = () => {
  return (
    <div>
    <div className='footer-main'>
        <div>
            <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/logo_dnf4hl.png"alt="LOGO" className='logo' />
            <p className='footer-para'>Veon AI is your intelligent partner<br/> 
for automation, analysis, and decision-making</p>
<p style={{marginLeft:"20px",marginTop:"40px",fontWeight:"bold"}}>Join our mailing list</p>
<input type="text"placeholder='Your Email' />
<button>Try Now</button>
        </div>
        <div>
            <p>Company</p>
            <p>About Us</p>
            <p>Solutions</p>
            <p>Why Choose Us</p>
            <p>Pricing</p>
        </div>
        <div>
            <p>Solutions</p>
            <p>Smart Automation</p>
            <p>Conversation Agent</p>
            <p>Analytics Agent</p>
            <p>Predictive Agent</p>
        </div>
      
    </div>
    <footer>© 2025 Veon, Inc.</footer>
    </div>
    
  )
}

export default Footer
