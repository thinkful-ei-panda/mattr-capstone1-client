import React, { Component } from 'react'
import TokenService from '../../Services/token-service'
import history from '../../history'
import Nav from '../Nav'
import '../App/App.css'
export default class Logout extends Component {

    handleLogout(event){
        event.preventDefault()
        TokenService.clearAuthToken()
        return history.push('/Home')
    }
    
    render() {

        return (
            <form className='VoteForm'>
                 <Nav />  
                <button className="vote-link" onClick={this.handleLogout} >
                    Logout
                </button>
                
            </form>
        )
    }
}
