import React, { Component } from 'react';
import '../RegistrationForm/RegistrationForm.css';
import ValidationError from '../ValidationError';
const validator = require("email-validator");


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: {
            value: '',
            touched: false
        },
        password: {
            value: '',
            touched: false
        }
      }
    }


    updateEmail(email) {
        this.setState({email: {value: email, touched: true}})
    };


    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    };

    handleLogin(event){
        event.preventDefault();
        const { email, password } = this.state;

        console.log('email: ', email.value);
        console.log('Password: ', password.value);
    }


      validateEmail(){
          const email = this.state.email.value.trim();
          if(!validator.validate(email)) {
              return 'Must enter a valid email';
          }
      }

      validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
          return 'Password is required';
        } else if (password.length < 6 || password.length > 72) {
          return 'Password must be between 6 and 72 characters long';
        } else if (!password.match(/[0-9]/)) {
          return 'Password must contain at least one number';
        }
      }


    render() {
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();

    return (
        <div>
            <form className="registration" action="/auth/login" onSubmit={e => this.handleLogin(e)}>

                <h2>Login</h2>
                
                <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" className="registration__control" name="email" id="email" onChange={e => this.updateEmail(e.target.value)} />
                {this.state.email.touched && <ValidationError message={emailError} />}
                </div>
                

        <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input type="password" className="registration__control" name="pw" id="password" onChange = {e => this.updatePassword(e.target.value)} />
            {this.state.password.touched && <ValidationError message={passwordError} />}
            <div className="registration__hint">6 to 72 characters, must include a number</div>
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button"> Reset </button>
          <button type="submit" className="registration__button" disabled={ this.validateEmail() || this.validatePassword() } > Login </button>
        </div>
      </form>

    </div>
    )}
}
