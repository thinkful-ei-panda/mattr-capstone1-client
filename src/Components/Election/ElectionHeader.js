import React, { Component } from 'react'
import ElectionServices from './ElectionServices'
const moment = require('moment')


export default class ElectionHeader extends Component {
    state = {
        election:{}
    }
    componentDidMount(){
        ElectionServices.getElection1Data().then((election)=>this.setState({election}))
    }
    
    render() {
    
        return (
            <>
                <h2>{ this.state.election.election_name }</h2>
                <h3> Election Day Deadline: { moment(this.state.election.date_end).fromNow() } </h3>
            </>
        )
    }
}
