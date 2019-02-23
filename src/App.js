import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";


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
