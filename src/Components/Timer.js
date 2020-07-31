import React, { Component } from 'react'

const moment = require('moment')

export default class Timer extends Component {
    render() {
        const electionDay = moment("20201104", "YYYYMMDD").fromNow()
        return (
            <div className='momentum'>
               <h4>Election Day Deadline: {electionDay} </h4> 

                
            </div>
        )
    }
}
