import React  from 'react';
import './App.css';
import {Header} from "./components/Header";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 1,
      score: 0,
    };

    // this.incrementScore.bind(this);
    // this.decrementScore = this.decrementScore.bind(this);
  }

  incrementScore = () => {
    console.log(this);
    this.setState(prevState => ({score: prevState.score + 1}))
  };

  decrementScore = () => {
    console.log(this);
    this.setState(prevState => ({score: prevState.score - 1}))
  };


  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={this.decrementScore}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className='counter-action increment' onClick={this.incrementScore}>+</button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
    <span className="player-name">
        {props.name}
      </span>
    <Counter/>
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({players: prevState.players.filter(item => item.id !== id)}))
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10}/>

        {
          this.state.players.map(play =>
            <Player
              name={play.name}
              score={play.score}
              key={play.id.toString()}
              id={play.id}
              removePlayer={this.handleRemovePlayer}
            />
          )
        }
      </div>
    );
  }

}


export default App;
