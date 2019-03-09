import React from 'react';
import './Scoreboard.css';
import Header from "../../components/Header";
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";

class Scoreboard extends React.Component {
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

export default connect(mapStateToProps)(Scoreboard);

