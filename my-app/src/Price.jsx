import React, { useState } from "react";



const Price = () => {
     const [active, setActive] = useState("monthly");
  return (
  <div>
    <div className='pricing'>
        <div>
            <p>PRICING PLAN</p>
            <h3>Choose your plan</h3>
            <div className="mon-ann">
      <button
        className={active === "monthly" ? "active" : ""}
        onClick={() => setActive("monthly")}
      >
        Monthly
      </button>
      <button
        className={active === "annual" ? "active" : ""}
        onClick={() => setActive("annual")}
      >
        Annual
      </button>
    </div>
        </div>

                <div className="pricing-grid">
  {/* Starter Card */}
  <div className="pricing-card">
    <div className="pricing-header">
     <div  className="sparkle-portion">
       <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043849/Sparkle_kzviq5.png"alt=""className="sparkle" />
       <h4>Starter</h4>
       </div>
      <h3>Free!</h3>
     
      <p>Try Veon for free</p>
      <button>Try Now</button>
    </div>
    <div className="pricing-features">
      <p>Access to basic AI agents</p>
      <p>10,000 AI requests/month</p>
      <p>Standard response time support</p>
      <p>Pre-built AI Agents</p>
      <p>Secure Cloud Access</p>
    </div>
  </div>

  {/* Pro Card */}
  <div className="pricing-card">
    <div className="pricing-header">
      <div  className="sparkle-portion">
        <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043850/Sparkle2_nusfjm.png" alt=""className="sparkle" />
      <h4>Pro</h4>
      </div>
      <h3>$19.99</h3>
      <p>per month per user</p>
      <button>Try Now</button>
    </div>
    <div className="pricing-features">
      <p>Everything in starter plan</p>
      <p>100,000 AI requests/month</p>
      <p>Priority Support</p>
      <p>API access for integrations</p>
      <p>Customizable Workflows</p>
    </div>
  </div>
</div>

      
    </div>
    <div className="pricing-card-enterprise" style={{margin:"0px 30px"}}>
    <div className="pricing-header">
     <div className="sparkle-portion"> <img src="https://res.cloudinary.com/do4vshn72/image/upload/v1759043850/Sparkle3_xl5fkr.png" alt=""className="sparkle" />
      <h4>Enterprise</h4></div>
      <h3>Custom Pricing</h3>
      <p>Please contact our team</p>
      <button className="enterprise-btn">Try Now</button>

    </div>
    <div className="pricing-features">
      <p>Everything in Pro Plan</p>
      <p>Unlimited AI Requests</p>
      <p>Custom AI Model Trainingt</p>
      <p>Personalized support & consultation</p>
      <p>Private Cloud Deployment</p>
    </div>
  </div>

    </div>
  )
}

export default Price
