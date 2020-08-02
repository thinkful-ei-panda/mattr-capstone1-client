import React, { Component } from 'react'

const moment = require('moment')

export default class Timer extends Component {

//     state = { election:[] }
//   componentDidMount(){
//     fetch("http://localhost:8000/api/election/1")
//     .then(res => {
//      return res.json()
//     })
//     .then(res => {
//       console.log(res)
//       this.setState({election: res})
//     })
//   }

    render() {
        const { election } = this.props
        const electionDay = moment("20201104", "YYYYMMDD").fromNow()
        return (
            <div className='momentum'>
               <h4>Election Day Deadline: {electionDay} </h4> 

                
            </div>
        )
    }
}
