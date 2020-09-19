import React, { Component } from 'react';
// import { connect } from "react-redux";
import { uuid } from "uuidv4";

 class Contact extends Component {
    constructor() {
        super();
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          enquiry: "",
          errors: null,
          message: null,
        };
      }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          enquiry: this.state.enquiry,
        };
        this.props.contactForm(this.state);
      };
    render() {
        let {
            firstName,
            lastName,
            email,
            enquiry,
            errors,
            message,
          } = this.state;
        return (
            <div>
                 <div className="contactFormCont">
        <form
          className="contactForm"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <h1>Contact Us</h1>
          <h3>First Name</h3>
          <input
            type="text"
            value={firstName}
            name="firstName"
            className=""
            placeholder="First Name"
            required
          ></input>
          <h3>Last Name</h3>
          <input
            type="text"
            value={lastName}
            name="lastName"
            className=""
            placeholder="Last Name"
            required
          ></input>
          <h3>Email</h3>
          <input
            type="email"
            className=""
            name="email"
            required
            placeholder="Email"
            value={email}
          ></input>
        
          <h3>Enquiry</h3>
          <textarea
            className="enquiry"
            name="enquiry"
            value={enquiry}
            placeholder="Enquiry:"
          ></textarea>

          <button type="submit" className="homeToggleButton">
            Submit Enquiry
          </button>
          <div className="errorCont">
            {errors !== null ? (
              <div className="errorsMessage">{errors}</div>
            ) : null}
            {message !== null ? (
              <div className="errorsMessage">{message}</div>
            ) : null}
          </div>
        </form>
      </div>
                
            </div>
        )
    }
}

export default Contact
