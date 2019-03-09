import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

class Player extends React.Component {

  render() {
    console.log(this.props);
    const {removePlayer, id, name, score} = this.props;
    return (
      <div className="player">
    <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className="player-name">
        {name}
      </span>
        <Counter score={score} index={id}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps);
    return nextProps.score !== this.props.score;
  }
}

let mapActionToProps = (dispatch) => {
  return {
    removePlayer: (id) => dispatch(removePlayer(id))
  };
};

export default connect(null, mapActionToProps)(Player);