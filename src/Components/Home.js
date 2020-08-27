import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div><Nav/>
            <div className='login-box'> 
                <p> Welcome to My Poll Data. You are now entering the beta site.
                    Let us begin our journey into shaping the future of Democracy.
                    As we know the current process for registering and voting is
                    time consuming, cumbersome and in some ways enigmatic for 
                    Billions of people around the globe. My Poll Data aims to leverage
                    technology to make Democracy more efficient and therefore more 
                    representative. </p>

                <p> Use your email to register and login to test the voting system out. 
                    Alternatively, you can use this demo account: </p>

                <p> login email: mycoolemail@gmail.com </p> 

                <p> password: My7$ecret </p>

                <Link to='/RegistrationForm' className='vote-link'> Register </Link>

            </div>
            </div>
        )
    }
}
