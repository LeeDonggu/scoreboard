import React from 'react';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";


class App extends React.Component {
  /*handleRemovePlayer = (id) => {
    this.setState(prevState => ({players: prevState.players.filter(item => item.id !== id)}))
  };*/

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>

        {
          this.props.players.map((play, index) =>
            <Player
              id={play.id}
              name={play.name}
              score={play.score}
              index={index}
              key={play.id}
            />
          )
        }

        <AddPlayerForm/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    players: state.playerReducer.players
  };
};

export default connect(mapStateToProps)(App);

