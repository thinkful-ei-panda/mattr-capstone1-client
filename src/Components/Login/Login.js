import React, { Component } from 'react';
import history from '../../history'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import '../RegistrationForm/RegistrationForm.css';

import LoginContext from '../../context/LoginContext'

import ValidationError from '../ValidationError';
import validator from 'email-validator'
import Nav from '../Nav';
export default class Login extends Component {

    static defaultProps = {
      onLoginSuccess: () => {this.setState = {loggedIn: true}}
    }

    constructor(props) {
        super(props);
        this.state = {
        user_email: {
            value: '',
            touched: false
        },
        user_password: {
            value: '',
            touched: false
        },
        error: null
      }
    }

    updateEmail(user_email) {
        this.setState({user_email: {value: user_email, touched: true}})
    };

    updatePassword(user_password) {
        this.setState({user_password: {value: user_password, touched: true}})
    };
   
      validateEmail(){
          const user_email = this.state.user_email.value.trim();
          if(!validator.validate(user_email)) {
              return 'Must enter a valid email';
          }
      }

      handleSubmitJwtAuth = ev => {
           ev.preventDefault()

           this.setState({ error: null })
           const { user_email, user_password } = ev.target
        
           AuthApiService.postLogin({
             user_email: user_email.value,
             user_password: user_password.value,
           })
             .then(res => {
               user_email.value = ''
               user_password.value = ''
               TokenService.saveAuthToken(res.authToken)
               this.props.onLoginSuccess()
             })
             .catch(res => {
               this.setState({ error: res.error })
             })
             history.push('/Election')
         }

    render() {
    const emailError = this.validateEmail();

    return (
        <div>
           <Nav />  
            <form className="registration"  onSubmit={this.handleSubmitJwtAuth} >
           
                <h2>Login</h2>
                
                <div className="form-group">
                <label htmlFor="user_email">E-mail *</label>
                <input type="email" className="registration__control" name="email" id="user_email" onChange={e => this.updateEmail(e.target.value)} />
                {this.state.user_email.touched && <ValidationError message={emailError} />}
                </div>
                
                <div className="form-group">
                    <label htmlFor="user_password">Password *</label>
                    <input type="password" className="registration__control" name="password" id="user_password" onChange = {e => this.updatePassword(e.target.value)} />
                    {/* {this.state.user_password.touched && <ValidationError message={passwordError} />} */}
                </div>

                <div className="vote-link-button-group">
                  <button type="reset" className="vote-link"> Reset </button>
                  <button type="submit" className="vote-link" disabled={ this.validateEmail() } > Login </button>
                </div>
                
            </form>

    </div>
    )}
}
