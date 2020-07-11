import React, { Component } from 'react'
import './App.css';
import ScoreCard from './ScoreCard';
import Header from './Header'
import Democrat from './joe-biden.jpg'
import Republican from './donald-trump.jpeg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.state = {
      countRep: 0,
      countDem: 0,
      voteScreen: false,
    };
  }

  vote() {
    console.log('Click happened');
  }

  // vote() => {
  //   this.setState(state => ({ voteScreen: !state.voteScreen }));
  // };
 
  render() {
   

  return (
    <div className="App">
     <Header />
     <ScoreCard
     onClick={this.vote}>
     <div className="Choices">
                <img src={Democrat} alt="Joe Biden" />
                <img src={Republican} alt="Joe Biden" />
                </div>
     </ScoreCard>

    </div>
  );
  }
}





