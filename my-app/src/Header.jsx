import React from 'react';
import './styles.css';
import logo1 from "./img/Logo01.png"
import logo2 from "./img/Logo02.png"
import logo3 from "./img/Logo03.png"
import logo4 from "./img/Logo04.png"
import logo5 from "./img/Logo05.png"
import logo6 from "./img/Logo06.png"

import logo from './img/logo.png'



function Header() {
  return (
    <div class="container">
    <div className='main-header'>
       <div className='header-1'>
        <div className='veon'><img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/logo_dnf4hl.png" alt="" className='mainLogo' /></div>
        <div>About</div>
        <div>Solutions</div>
        <div>Why veon </div>
        <div>Pricing</div>
        </div>

        <div className='header-2'>
          <h2>Work Smarter <br />with Better Outcomes</h2>
          <h5>Adapting,Learning ans Evolving with your need with <br /> Veon AI</h5>
          <button className='try-now-btn'>Try Now</button>
        </div>

        <div>
          <div class="stars">
            ★ ★ ★ ★ ★
            </div>
            <h3 style={{color:"#ffffff"}}>Trusted By hundreds companies</h3>
        </div>
        <div className='logo-section'>
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043848/Logo01_dtxylt.png"alt="" />
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/Logo02_i8xivs.png" alt="" />
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/Logo03_qzvbar.png" alt="" />
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/Logo04_xretht.png"alt="" />
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/Logo05_t2uas4.png" alt="" />
          <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/Logo06_nso9ru.png" alt="" />


        </div>
    </div>
    </div>
  )
}

export default Header;
