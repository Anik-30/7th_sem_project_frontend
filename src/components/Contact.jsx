import React from "react";
import "../style/contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h1 className="headingcontact">
          <span>Connect</span> with us
        </h1>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>

            <form classname="row g-3 needs-validation" novalidate>
              <div classname="col-md-4">
                <label for="validationCustom01" classname="form-label">
                  First name
                </label>
                <input
                  type="text"
                  classname="form-control"
                  id="validationCustom01"
                  placeholder="Major"
                  required
                />
              </div>
              <div classname="col-md-4">
                <label for="validationCustom02" classname="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  classname="form-control"
                  id="validationCustom02"
                  placeholder="Team"
                  required
                />
              </div>
              <div classname="col-md-4">
                <label for="validationCustom02" classname="form-label">
                  Phone no.
                </label>
                <input
                  type="text"
                  classname="form-control"
                  id="validationCustom02"
                  placeholder="1253675830"
                  required
                />
              </div>
              <br/>
              <button type="button" class="btn btn-outline-light">Submit</button>
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
  );
};

export default Contact;
