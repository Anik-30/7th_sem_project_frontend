import React from 'react'

import  "../style/footer.css"
const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <h3>Weather Appliation</h3>
      <p>Vatavaran, Your futuristic weather forecasting app</p>
    <ul className='socials'>
      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
    </ul>
    </div>
    <div className='footer-bottom'>
      <p>copyright &copy;2024 Vatavaran. designed by<span>Anik</span></p>
    </div>
    </footer>
  )
}

export default Footer
