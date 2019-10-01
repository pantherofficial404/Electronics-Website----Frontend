import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav id="nav">
            <Link to="/" className="brand-logo left"><img src="/assests/images/logo-04.png" alt="brand" style={{ width: '12rem', height: '4rem' }} /></Link>
            <ul className="right hide-on-med-and-down">
              <li className="closable"><Link to='/' >Home</Link></li>
              <li style={{ width: '8.9rem' }}>
                <button className="product-dropdown-trigger btn transparent" href="#" data-target="product_dropdown">Products</button>
                <ul id="product_dropdown" className="dropdown-content">
                  <li className="closable"><Link to="/products">Car Battery</Link></li>
                  <li className="divider"></li>
                  <li className="closable"><Link to="/products">Two Wheeler Battery</Link></li>
                  <li className="divider"></li>
                  <li className="closable"><Link to="/products">Three Wheeler Battery</Link></li>
                  <li className="divider"></li>
                  <li className="closable"><Link to="/products">Heavy Duty Battery</Link></li>
                </ul>
              </li>
              <li>
                <button className="product-dropdown-trigger btn transparent" data-target="services_dropdown">Services</button>
                <ul id="services_dropdown" className="dropdown-content">
                  <li className="closable"><Link to="/services">Battery Testing & Charging</Link></li>
                  <li className="divider"></li>
                  <li className="closable"><Link to="/services">Installation</Link></li>
                  <li className="divider"></li>
                </ul>
              </li>

              <li className="closable"><Link to="/about">About Us</Link></li>
              <li className="closable"><Link to="/contact">Contact</Link></li>
              <li className="closable"><Link to='/faq'>FAQ</Link></li>
            </ul>
            <a href="#!" className="sidenav-trigger right" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
          </nav>
        </div>
        <ul className="sidenav dark" id="mobile-links">
          <li className="closable"><Link to="/">Home</Link></li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li>
                <a className="collapsibleNavbar collapsible-header" href="#!">Products
                <i className="material-icons right navbarMarginRight">arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li className="closable"><Link to="/products">Car Battery</Link></li>
                    <li className="closable"><Link to="/products">Two Wheeler Battery</Link></li>
                    <li className="closable"><Link to="/products">Three Wheeler Battery</Link></li>
                    <li className="closable"><Link to="/products">Heavy Duty Battery</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li>
                <a className="collapsibleNavbar collapsible-header" href="#!">Services
                <i className="material-icons right navbarMarginRight">arrow_drop_down</i></a>
                <div className="collapsible-body">
                  <ul>
                    <li className="closable"><Link to="/services">Battery Testing & Charging</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="closable"><Link to='/about'>About Us</Link></li>
          <li className="closable"><Link to='/contact'>Contact</Link></li>
          <li className="closable"><Link to='faq'>FAQ</Link></li>

        </ul>
      </div >
    )
  }
}
