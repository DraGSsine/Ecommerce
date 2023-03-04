import React from 'react'
import paymentsmetoth from '../../assets/images/payment-visa-card.png'
import logo from '../../assets/images/ShopLogo.png'
import './footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>


        <div className='footer-logo'>
          <img src={logo} />
          <h1 className='powerd'>Powerd by <span>Ouchen</span></h1>
        </div>
        <ul className='footer-links'>
          <li className='title'>Categories</li>
          <li>Women</li>
          <li>Men</li>
          <li>Shoes</li>
          <li>Accessoirs</li>
          <li>New</li>

        </ul>
        <ul className='footer-links'>
        <li className='title'>links</li>
          <li>FAQ</li>
          <li>Pages</li>
          <li>Stores</li>
          <li>cokies</li>
        </ul>
        <ul className='footer-about'>
          <li className='title'>About</li>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals</p>
        </ul>
        <ul className='footer-contact'>
        <li className='title'>contact</li>
        <form>
          <input placeholder='Enter Your Email' type='email'/>
          <button>Submit</button>
        </form>
      </ul>
      </div>


      <div className='footer-buttom'>
        <div className='Copyright '>
          <h5>Copyright © 2022 Suruchi . All Rights Reserved.Design By Suruchi</h5>
        </div>
        <div className='payment'>
          <img src={paymentsmetoth} />
        </div>
      </div>
    </div>
  )
}

export default Footer