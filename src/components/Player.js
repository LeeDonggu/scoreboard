import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
    <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter {...props}/>
    </div>
  );
};