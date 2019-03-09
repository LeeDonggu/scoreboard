import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class Player extends React.Component {

  render() {
    console.log(this.props);
    const {removePlayer, id, name, score} = this.props;
    return (
      <div className={styles.player}>
    <span className={styles['player-name']}>
        <button className={styles["remove-player"]} onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className={styles['player-name']}>
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