import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './NotFoundPage.css'


export default class NotFoundPage extends Component {
   
    render() {
        return (
            <div className='not-found-box'>
                 <Nav />  
                <h3 className='not-found'>We don't know what you're looking for. </h3>
                <Link to='/Home' className='go-back' >Go Back</Link>
        
        </div>
        )
    }
}
