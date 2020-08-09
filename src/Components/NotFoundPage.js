import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'


export default class NotFoundPage extends Component {
   
    render() {
        return (
            <div>
                 <Nav />  
                <h3>We don't know what you're looking for. <Link to='/Home'>Go Back</Link> </h3>
        
        </div>
        )
    }
}
