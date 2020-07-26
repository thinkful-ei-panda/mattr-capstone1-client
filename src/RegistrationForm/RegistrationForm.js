import React, { Component } from 'react';
import './RegistrationForm.css';
import ValidationError from './ValidationError';
const validator = require("email-validator");

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        firstName: {
            value: '',
            touched: false
        },
        lastName: {
            value: '',
            touched: false
        },
        email: {
            value: '',
            touched: false
        },
        dob: {
            value: '',
            touched: false
        },
        password: {
            value: '',
            touched: false
        },
        repeatPassword: {
            value: '',
            touched: false
        }
      }
    }

    updateFirstName(firstName) {
          this.setState({firstName: {value: firstName, touched: true}})
      };

    updateLastName(lastName) {
        this.setState({lastName: {value: lastName, touched: true}})
    };

    updateEmail(email) {
        this.setState({email: {value: email, touched: true}})
    };

    updateDOB(dob) {
        this.setState({dob: {value: dob, touched: true}})
    };

    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    };
      
    updateRepeatPassword(repeatPassword) {
        this.setState({repeatPassword: {value: repeatPassword, touched: true}})
    };

    handleSubmit(event){
        event.preventDefault();
        const { firstName, lastName, email, dob, password, repeatPassword } = this.state;

        console.log('first name: ', firstName.value);
        console.log('last name: ', lastName.value);
        console.log('email: ', email.value);
        console.log('dob: ', dob.value);
        console.log('Password: ', password.value);
        console.log('Repeat Password: ', repeatPassword.value);
    }

    validateFirstName() {
        const firstName = this.state.firstName.value.trim();
        if (firstName.length === 0) {
          return 'Name is required';
        } else if (firstName.length < 3) {
          return 'Name must be at least 3 characters long';
        }
      }

    validateLastName(){
          const lastName = this.state.lastName.value.trim();
          if (lastName.length === 0) {
              return 'Name is required';
          } else if (lastName.length < 2) {
              return 'Name must be at least 3 characters long';
          }
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

      validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
    
        if (repeatPassword !== password) {
          return 'Passwords do not match';
        }
      }

    render() {
    const firstNameError = this.validateFirstName();
    const lastNameError = this.validateLastName();
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
         <div>
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>  
                <div className="form-group">
                <label htmlFor="first-name">First Name *</label>
                <input type="text" className="registration__control" name="first-name" id="first-name" onChange={e => this.updateFirstName(e.target.value)} defaultValue="first name" />
                <ValidationError message={firstNameError}/>
                {this.state.firstName.touched && <ValidationError message={this.validateFirstName} />}
                </div>
                <div className="form-group">
                <label htmlFor="last-name">Last Name *</label>
                <input type="text" className="registration__control" name="last-name" id="name" onChange={e => this.updateLastName(e.target.value)} defaultValue="last name" />
                {this.state.firstName.touched && <ValidationError message={lastNameError} />}
                </div>
                <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" className="registration__control" name="email" id="email" onChange={e => this.updateEmail(e.target.value)} defaultValue="email address"/>
                {this.state.firstName.touched && <ValidationError message={emailError} />}
                </div>
                <div className="form-group">
                <label htmlFor="dob">Date of Birth *</label>
                <input type="date" className="registration__control" name="dob" id="dob" onChange={e => this.updateDOB(e.target.value)} />
                {/* {this.state.firstName.touched && <ValidationError message={this.validateDOB} />} */}
       </div>

       <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input type="password" className="registration__control" name="password" id="password" onChange = {e => this.updatePassword(e.target.value)} />
          {this.state.firstName.touched && <ValidationError message={passwordError} />}
          <div className="registration__hint">6 to 72 characters, must include a number</div>
       </div>

       <div className="form-group">
         <label htmlFor="repeatPassword">Repeat Password *</label>
         <input type="password" className="registration__control" name="repeatPassword" id="repeatPassword" onChange = {e => this.updateRepeatPassword(e.target.value)} />
         {this.state.firstName.touched && <ValidationError message={repeatPasswordError} />}
       </div>

       <div className="registration__button__group">
        <button type="reset" className="registration__button"> Cancel </button>
        <button type="submit" className="registration__button" disabled={ this.validateFirstName() || this.validateLastName() || this.validateEmail() || this.validatePassword() || this.validateRepeatPassword() } > Save </button>
       </div>
     </form>
        </div>
    )}
}
