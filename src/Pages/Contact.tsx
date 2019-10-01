import React, { Component, ChangeEvent, MouseEvent } from 'react'
import axios from 'axios';

import config from 'config';

interface IState {
  isSending: boolean;
  email: string;
  phone: string;
  message: string;
  name: string;
}
export default class Contact extends Component<{}, IState> {
  state: IState = {
    isSending: false,
    email: '',
    phone: '',
    message: '',
    name: ''
  }

  handleName = (e: ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value });
  handleEmail = (e: ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value });
  handleMessage = (e: ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value });
  handlePhone = (e: ChangeEvent<HTMLInputElement>) => this.setState({ phone: e.target.value });

  handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    this.setState({ isSending: true });
    const { name, email, phone, message } = this.state;
    const textMessage = `Hey Admin ${name} wants to contact with you. Mobile number is ${phone} and email is ${email} and He/She sent this message :- "${message}"`;
    const string = `https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=${config.USERNAME}&key=${config.APIKEY}&to=${config.OWNER_NO}&message=${textMessage}`;
    await axios.get(string);
    this.setState({
      isSending: false,
      email: '',
      phone: '',
      message: '',
      name: ''
    });
  }
  render() {
    const { email, phone, message, name } = this.state;
    return (
      <div>
        <div className="slider headerContainer">
          <p>CONTACT US</p>
        </div>
        <div className="row contactForm">
          <div className="col s12 m4">
            <p className="contactHeader">CONTACT INFO</p>
            <div className="contactInfoContainer">
              <i className="red-text material-icons">call</i>
              <a className="contactInfoTextContainer" href="tel:+919570518195">
                <p>PHONE NUMBER</p>
                <p>(+91) 95705 18195</p>
              </a>
            </div>
            <div className="contactInfoContainer">
              <i className="red-text material-icons">email</i>
              <a className="contactInfoTextContainer" href="mailto:Sales@deyautoelectric.com">
                <p>EMAIL ADDRESS</p>
                <p>Sales@deyautoelectric.com</p>
              </a>
            </div>
            <div className="contactInfoContainer">
              <i className="red-text material-icons">location_on</i>
              <a className="contactInfoTextContainer"
                href="https://www.google.com/maps/place/DEY+AUTO+ELECTRIC/@26.0875841,87.2332563,18z/data=!3m1!4b1!4m5!3m4!1s0x39ef95ed212b44a7:0xe9ac006f75f42898!8m2!3d26.0875817!4d87.2343506">
                <p>ADDRESS INFO</p>
                <p>DEY AUTO ELECTRIC , SH-77 , Raniganj , Near PNB Bank , Bihar-854334</p>
              </a>
            </div>
          </div>
          <div className="col s12 m7">
            <p className="contactHeader">GET IN TOUCH</p>
            <input id="name" type="text" placeholder="Name" value={name} className="input" onChange={this.handleName} />
            <input id="email" type="email" placeholder="Email" value={email} className="input" onChange={this.handleEmail} />
            <input id="phone" type="number" maxLength={10} placeholder="Phone" value={phone} className="input" onChange={this.handlePhone} />
            <input id="message" type="text" placeholder="Message" value={message} className="input" onChange={this.handleMessage} />
            <button className="btn red" onClick={this.handleSubmit} disabled={this.state.isSending}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}
