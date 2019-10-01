import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="slider headerContainer serviceHeader">
          <p>ALL SERVICES</p>
        </div>
        <div className="formContent">
          <p className="center welcomeText">WHAT WE OFFER</p>
          <p className="center welcomeCaption">There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable.</p>
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="aboutusCard">
                <div className=" serviceButtonContainer">
                  <i className="large material-icons serviceIcon">chat_bubble_outline</i>
                  <span>01</span>
                </div>
                <p className="serviceHeader">INTERNATIONAL STANDARDS</p>
                <p className="serviceText">It is a long established fact that a reader will be distracted by the readable
              contentof a page.</p>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="aboutusCard">
                <div className="serviceButtonContainer">
                  <i className="large material-icons serviceIcon">chat_bubble_outline</i>
                  <span>02</span>
                </div>
                <p className="serviceHeader">INTERNATIONAL STANDARDS</p>
                <p className="serviceText">It is a long established fact that a reader will be distracted by the readable
              contentof a page.</p>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="aboutusCard">
                <div className="serviceButtonContainer">
                  <i className="large material-icons serviceIcon">chat_bubble_outline</i>
                  <span>03</span>
                </div>
                <p className="serviceHeader">INTERNATIONAL STANDARDS</p>
                <p className="serviceText">It is a long established fact that a reader will be distracted by the readable
              contentof a page.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container packages">
          <p className="center welcomeText">BEST PACKAGES</p>
          <p className="center welcomeCaption">There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
      believable.</p>
          <div className="row">
            <div className="col s12 m3">
              <div className="priceCard">
                <p className="priceHeader">STARTER</p>
                <div className="priceContainer">
                  <p>$19</p>
                  <p> /month</p>
                </div>
                <p className="serviceTypeText">> Outside Wash</p>
                <p className="serviceTypeText">> Under Body Wash</p>
                <p className="serviceTypeText">> Rust Inhibitor</p>
                <p className="serviceTypeText">> Wheel Cleaing</p>
                <p className="serviceTypeText">> Wheel Balancing</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="priceCard">
                <p className="priceHeader">BASIC</p>
                <div className="priceContainer">
                  <p>$19</p>
                  <p> /month</p>
                </div>
                <p className="serviceTypeText">> Outside Wash</p>
                <p className="serviceTypeText">> Under Body Wash</p>
                <p className="serviceTypeText">> Rust Inhibitor</p>
                <p className="serviceTypeText">> Wheel Cleaing</p>
                <p className="serviceTypeText">> Wheel Balancing</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="priceCard themeBackground">
                <p className="priceHeader">PROFESSIONAL</p>
                <div className="priceContainer">
                  <p>$19</p>
                  <p> /month</p>
                </div>
                <p className="serviceTypeText">> Outside Wash</p>
                <p className="serviceTypeText">> Under Body Wash</p>
                <p className="serviceTypeText">> Rust Inhibitor</p>
                <p className="serviceTypeText">> Wheel Cleaing</p>
                <p className="serviceTypeText">> Wheel Balancing</p>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="priceCard">
                <p className="priceHeader">ULTRA</p>
                <div className="priceContainer">
                  <p>$19</p>
                  <p> /month</p>
                </div>
                <p className="serviceTypeText">> Outside Wash</p>
                <p className="serviceTypeText">> Under Body Wash</p>
                <p className="serviceTypeText">> Rust Inhibitor</p>
                <p className="serviceTypeText">> Wheel Cleaing</p>
                <p className="serviceTypeText">> Wheel Balancing</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
