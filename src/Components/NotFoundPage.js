import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NotFoundPage extends Component {
   
    render() {
        return (
            <div>
                <h3>We don't know what you're looking for. Go <Link to='/'>Home</Link> </h3>
        
        </div>
        )
    }
}
