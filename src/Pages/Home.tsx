import React, { Component } from 'react';
import M from "materialize-css";

export default class Home extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { full_width: true, height: 650, interval: 5000 });
  }
  render() {
    return (
      <div >
        <div className="slider">
          <ul className="slides">
            <li className="sliderContainer">
              <div className="overlay"></div>
              <img src="/assests/images/slide1.jpg" className="responsive-img" alt="img" />
              <div className="caption left-align">
                <div className="sliderHeaderContainer">
                  <p className="sliderHeader">SATISFACTION GUARANTEED</p>
                  <p className="sliderHeader">OR YOUR DENT BACK</p>
                </div>
                <div className="sliderText">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words.</p>
                  <button className="white-text btn waves-effect themeButton">Read more</button>
                </div>
              </div>
            </li>
            <li className="sliderContainer">
              <div className="overlay"></div>
              <img src="/assests/images/slide2.jpg" className="responsive-img" alt="img" />
              <div className="caption left-align">
                <div className="sliderHeaderContainer">
                  <p className="sliderHeader">SATISFACTION GUARANTEED</p>
                  <p className="sliderHeader">OR YOUR DENT BACK</p>
                </div>
                <div className="sliderText">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words.</p>
                  <button className="white-text btn waves-effect themeButton">Read more</button>
                </div>
              </div>
            </li>
            <li className="sliderContainer">
              <div className="overlay"></div>
              <img src="/assests/images/slide3.jpg" className="responsive-img" alt="img" />
              <div className="caption left-align">
                <div className="sliderHeaderContainer">
                  <p className="sliderHeader">SATISFACTION GUARANTEED</p>
                  <p className="sliderHeader">OR YOUR DENT BACK</p>
                </div>
                <div className="sliderText">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words.</p>
                  <button className="white-text btn waves-effect themeButton">Read more</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="ourCompanyContainer">
          <p className="themeText center welcomeHeader">WELCOME CARSERVX</p>
          <p className="center welcomeText">WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS</p>
          <p className="center welcomeCaption">There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
      believable.</p>
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="serviceContainer">
                <p className="serviceHeader">INTERNATIONAL STANDARDS</p>
                <p className="serviceText">It is a long established fact that a reader will be distracted by the readable
            contentof a page.</p>
                <p><i className="large material-icons serviceIcon">chat_bubble_outline</i></p>
                <div className="serviceButtonContainer">
                  <button className="btn red themeButton waves-effect">Read More</button>
                  <span>01</span>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="serviceContainer">
                <p className="serviceHeader">INTERNATIONAL STANDARDS</p>
                <p className="serviceText">It is a long established fact that a reader will be distracted by the readable
            contentof a page.</p>
                <p><i className="large material-icons serviceIcon">card_travel</i></p>
                <div className="serviceButtonContainer">
                  <button className="btn red themeButton waves-effect">Read More</button>
                  <span>02</span>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="serviceContainer">
                <p className="serviceHeader">INTERNATIONAL STANDARDS</p>
                <p className="serviceText">It is a long established fact that a reader will be distracted by the readable
            contentof a page.</p>
                <p><i className="large material-icons serviceIcon">code</i></p>
                <div className="serviceButtonContainer">
                  <button className="btn red themeButton waves-effect">Read More</button>
                  <span>03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row dataCounterContainer">
          <div className="layer"></div>
          <div className="col s12 m4 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter">0</p>
                <p>Car Painted</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter">0</p>
                <p>Car Painted</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4 ">
            <div className="counterContainer">
              <i className="medium themeText material-icons">settings</i>
              <div className="counterTextContainer">
                <p className="counter">0</p>
                <p>Car Painted</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ourServiceContainer">
          <div className="ourServiceTextContainer">
            <p className="ourServiceHeader">OUR SERVICES</p>
            <p className="ourServiceCaption">WE PROVIDE PROFESSIONAL SERVICES</p>
            <p className="ourServiceContext">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
          <div className="ourServicesCardContainer">
            <div className="row">
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="/assests/images/pic2.jpg" alt="img" />
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <button className="white-text btn waves-effect themeButton">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="/assests/images/pic6.jpg" alt="img" />
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <button className="white-text btn waves-effect themeButton">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="/assests/images/pic11.jpg" alt="img" />
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <button className="white-text btn waves-effect themeButton">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row whyChooseContainer">
          <div className="col s12 m6 l6 whyChooseTextContainer">
            <p className="whyChooseHeader themeText">WHY CHOOSE US</p>
            <p className="whyChooseCaption">WHY PEOPLE CHOOSE US</p>
            <div className="whyChooseLabelContainer">
              <div>
                <p className="captionIndex">1</p>
              </div>
              <div>
                <p className="captionText">To facilitate even energy distribution so your vehicle's battery is properly charged.</p>
              </div>
            </div>
            <div className="whyChooseLabelContainer">
              <div>
                <p className="captionIndex">2</p>
              </div>
              <div>
                <p className="captionText">Avoid breaking down in your vehicle by maintaining its belts and hoses.</p>
              </div>
            </div>
            <div className="whyChooseLabelContainer">
              <div>
                <p className="captionIndex">3</p>
              </div>
              <div>
                <p className="captionText">Failing an emissions test is usually the fault of either the muffler or the exhaust system.</p>
              </div>
            </div>
            <div className="whyChooseLabelContainer">
              <div>
                <p className="captionIndex">4</p>
              </div>
              <div>
                <p className="captionText">The performance of the engine, alternator, and secondary electrical systems depend on the battery.</p>
              </div>
            </div>
            <div className="whyChooseLabelContainer">
              <div>
                <p className="captionIndex">5</p>
              </div>
              <div>
                <p className="captionText">The performance of the engine, alternator, and secondary electrical systems depend on the battery. </p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6 whyChooseImageContainer">
            <div className="whyChooseImage">
            </div>
            <div className="whyChooseContact">
              <p className="chooseContactHeader">WANT TO TALK?</p>
              <p className="chooceContactNumber">CALL:(123) 556 4321</p>
              <p>Need a special repair service? we are happy to fulfil every request in order to exceed
          your expectations</p>
            </div>
          </div>
        </div>
        <div className="row faqSection">
          <div className="col s12 m6 l6 faqSectionLeft">
            <div className="trustedText">
              <p>We Provide</p>
              <p>TRUSTED<br />SERVICES<br />FOR YOU</p>
            </div>
            <div className="trustedImage">
              <img src="/assests/images/new.png" alt="img" />
            </div>
          </div>
          <div className="col s12 m6 l6 faqSectionRight">
            <p className="faqRightHeader">WHAT WE DO</p>
            <p>SATISFACTION</p>
            <p>GUARANTEED OR YOUR</p>
            <p>DENT BACK.</p>
            <ul className="collapsible">
              <li>
                <div className="collapsible-header">When Should i Replace My Fuel Filter?</div>
                <div className="collapsible-body">There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words which don't look even
            slightly believabl</div>
              </li>
              <li>
                <div className="collapsible-header">Must i get Air Conditioning Serviced? </div>
                <div className="collapsible-body">Graphic design lorem Ipsum is simply dummy text of the printing and type setting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer
            took.</div>
              </li>
              <li>
                <div className="collapsible-header">How Long it Take To Repair My Vehicle?</div>
                <div className="collapsible-body">Developement lorem Ipsum is simply dummy text of the printing and type has been
                  the industry's standard dummy text ever since the when an unknown printer took a galley of type and
            scrambled it to make.</div>
              </li>
            </ul>
          </div>
        </div >
      </div>
    )
  }
}
