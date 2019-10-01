import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className="row">
          <div className="col s12 m4">
            <h6>GET IN TOUCH</h6>
            <a className="footerDataContainer"
              href="https://www.google.com/maps/place/DEY+AUTO+ELECTRIC/@26.0875841,87.2332563,18z/data=!3m1!4b1!4m5!3m4!1s0x39ef95ed212b44a7:0xe9ac006f75f42898!8m2!3d26.0875817!4d87.2343506">
              <i className="material-icons themeText">location_on</i>
              <p>DEY AUTO ELECTRIC , SH-77 , Raniganj , Near PNB Bank , Bihar-854334</p>
            </a>
            <a className="footerDataContainer" href="mailto:Sales@deyautoelectric.com">
              <i className="material-icons themeText">email</i>
              <p>Sales@deyautoelectric.com</p>
            </a>
            <a className="footerDataContainer" href="tel:+919570518195">
              <i className="material-icons themeText">call</i>
              <p>(+91) 95705 18195</p>
            </a>
          </div>
          <div className="col s12 offset-m3 m3">
            <h6>LINKS</h6>
            <a href="index.html" className="link">Home</a>
            <a href="products.html" className="link">Products</a>
            <a href="services.html" className="link">Services</a>
            <a href="about.html" className="link">About Us</a>
            <a href="contact.html" className="link">Contact Us</a>
            <a href="faq.html" className="link">FAQ</a>
          </div>
        </div>
      </div>
    )
  }
}
