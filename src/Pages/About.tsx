import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="slider headerContainer aboutHeader">
          <p>About Us</p>
        </div>
        <div className="formContent">
          <p className="center welcomeText">WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS</p>
          <p className="center welcomeCaption">There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable.</p>
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="aboutusCard">
                <div className="serviceButtonContainer">
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
        <p className="center welcomeText">WHY CHOOSE US?</p>
        <p className="center welcomeCaption">There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
    believable.</p>
        <div className="row aboutusCounter">
          <div className="col s12 m3 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter black-text">0</p>
                <p className="black-text">Car Painted</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter black-text">0</p>
                <p className="black-text">Car Painted</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter black-text">0</p>
                <p className="black-text">Car Painted</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter black-text">0</p>
                <p className="black-text">Car Painted</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
