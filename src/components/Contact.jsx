import React from 'react'
import '../style/contact.css'
const Contact = () => {
  return (
    <div>
    <div className='contact-container'>
    <h1 className='headingcontact'><span>Connect</span> with us</h1>
    <div className='contact-box'>
     <div className="contact-left">
      <h3>Send your request</h3>
      <form>
        <div className="input_row">
          <div className="input-group">
        
            <input type='text' placeholder='Enter your Name'/>
          </div>
          <div className="input-group">
    
            <input type='number' placeholder='Enter your Phone no'/>
          </div>
          <div className="input-group">
      
            <input type='email' placeholder='Enter your email'/>
          </div>
          <br/>
          <div className="input-group">
          
            <textarea rows='5' placeholder='Your Feedback'/>
          </div>
        </div>
        <button className='contact-btn'>Send</button>
      </form>
     </div>
     <div className="contact-right">
      <h3>Reach Us</h3>
      <table>
        <tr>
          <td>Email</td>
          <td>anikarunangshu@gmail.com</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>+91 6296248589</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>Kolkata, West Bengal</td>
        </tr>
      </table>
     </div>
    </div>
  </div>
    </div>
  )
}

export default Contact
