import React, { Component } from 'react'
import Democrat from './joe-biden.jpg'

export default class ScoreCard extends Component {
   
    
    render() {
        return (
            <section>
                {this.props.children}
                <button onClick={this.props.vote} type="button">
          Vote
        </button>
            </section>
        )
    }
}
