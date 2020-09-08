import React, { Component } from "react";
import history from "../../history";
import AuthApiService from "../../Services/auth-api-service";
import "./RegistrationForm.css";
import ValidationError from "../ValidationError";
import Nav from "../Nav/Nav";

const validator = require("email-validator");

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        touched: false,
      },
      password: {
        value: "",
        touched: false,
      },
      repeatPassword: {
        value: "",
        touched: false,
      },
      error: null,
    };
  }

  handleRegistrationSubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_email: email.value,
      user_password: password.value,
    })
      .then((user) => {
        email.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
    history.push("/Login");
  };

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  updateEmail(email) {
    this.setState({ email: { value: email, touched: true } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({ repeatPassword: { value: repeatPassword, touched: true } });
  }

  validateEmail() {
    const email = this.state.email.value.trim();
    if (!validator.validate(email)) {
      return "Must enter a valid email";
    }

    return false;
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    } else {
      return false;
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
    return false;
  }

  render() {
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <div className='registration-form'>
        <Nav />
        <div className="login-box animate__animated animate__fadeInDownBig">
          <h2>Register</h2>
          <form onSubmit={this.handleRegistrationSubmit}>
            <div className="registration__hint">* required field</div>
            <div className="user-box">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                className="registration__control"
                name="email"
                id="email"
                onChange={(e) => this.updateEmail(e.target.value)}
              />
              {this.state.email.touched && (
                <ValidationError message={emailError} />
              )}
            </div>

            <div className="user-box">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => this.updatePassword(e.target.value)}
              />
              {this.state.password.touched && (
                <ValidationError message={passwordError} />
              )}
            </div>

            <div className="user-box">
              <label htmlFor="repeatPassword">Repeat Password *</label>
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                onChange={(e) => this.updateRepeatPassword(e.target.value)}
              />
              {this.state.repeatPassword.touched && (
                <ValidationError message={repeatPasswordError} />
              )}
            </div>

            <div className="vote-link-button-group">
              <button
                type="submit"
                className="vote-link"
                disabled={
                  this.validateEmail() &&
                  this.validatePassword() &&
                  this.validateRepeatPassword()
                }
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
