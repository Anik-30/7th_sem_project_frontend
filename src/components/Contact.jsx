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
            <label>Name</label>
            <input type='text' placeholder='Enter your Name'/>
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type='number' placeholder='Enter your Name'/>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type='email' placeholder='Enter your Name'/>
          </div>
          <div className="input-group">
            <label>Your Query</label>
            <textarea rows='5' placeholder='Enter your Name'/>
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
