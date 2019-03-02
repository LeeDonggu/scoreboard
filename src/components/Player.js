import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {

  render() {
    console.log(this.props);
    const {removePlayer, id, name} = this.props;
    return (
      <div className="player">
    <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className="player-name">
        {name}
      </span>
        <Counter {...this.props}/>
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