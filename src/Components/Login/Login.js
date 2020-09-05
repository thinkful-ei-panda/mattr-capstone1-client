import React, { Component } from 'react';
import history from '../../history'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import '../RegistrationForm/RegistrationForm.css';
import ValidationError from '../ValidationError';
import validator from 'email-validator'
import Nav from '../Nav/Nav';
import './Login.css';
export default class Login extends Component {

    static defaultProps = {
      onLoginSuccess: () => {this.setState = {loggedIn: true}}
    };

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
    };

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
               history.push('/Election') 
             })
             .catch(res => {
               console.error(res.error)
               this.setState({ error: res.error })
             })
             
            
         };

    render() {
      
    const emailError = this.validateEmail();
    const { error } = this.state;
    
    return (
        <div className="login-box">
           <Nav />  
          
            <h2>Login</h2>
            <form onSubmit={this.handleSubmitJwtAuth} >
            <div role='alert'>
            {error && <p className='red'>{error}</p>}
            </div>

              <div className="user-box">
                <label>Email *</label>
                <input required type="email" name="email" id="user_email" onChange={e => this.updateEmail(e.target.value)} />
                {this.state.user_email.touched && <ValidationError message={emailError} />}
              </div>

              <div className="user-box">
                <label>Password *</label>
                <input required type="password" name="password" id="user_password" onChange = {e => this.updatePassword(e.target.value)} />
              </div>

              <button type="submit" className="vote-link" > 
                <span></span>
                <span></span>
                <span></span>
                <span></span> 
                Submit 
                </button>

              </form>
            </div>
         
    )};
};
