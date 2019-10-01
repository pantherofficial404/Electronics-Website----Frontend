import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <div className="slider headerContainer aboutHeader">
          <p>Our Products</p>
        </div>
        <div className="productsContainer">
          <p className="center welcomeText">Our Products</p>
          <p className="center welcomeCaption">There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable.</p>
          <div className="row">
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/car-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Car Battery</p>
                <p className="productContentPrice">&#8377; 500.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/two-wheeler- battery2.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Two Wheeler Battery</p>
                <p className="productContentPrice">&#8377; 400.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/three-wheeler-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Three Wheeler Battery</p>
                <p className="productContentPrice">&#8377; 550.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/heavy-duty-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Heavy Duty Battery</p>
                <p className="productContentPrice">&#8377; 350.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/inverter-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Inverter Battery</p>
                <p className="productContentPrice">&#8377; 500.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/heavy-duty-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Car Battery</p>
                <p className="productContentPrice">&#8377; 500.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/three-wheeler-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Car Battery</p>
                <p className="productContentPrice">&#8377; 500.00</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="productContent">
                <img src="/assests/images/car-battery.png" alt="car-battery" className="productImage" />
                <p className="productContentHeader">Car Battery</p>
                <p className="productContentPrice">&#8377; 500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
