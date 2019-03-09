import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
import classNames from 'classnames';

import styles from '../pages/scoreboard/Scoreboard.module.css';

class Counter extends React.Component {

  render() {
    const {changeScore, index, score} = this.props;

    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={() => changeScore(index, -1)}>-
        </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={() => changeScore(index, 1)}>+
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  changeScore: PropTypes.func,
  index: PropTypes.number,
  score: PropTypes.number,
};

// action을 dispatch하는 펑션을 props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeScore: (index, score) => dispatch(changeScore(index, score)),
  };
};

export default connect(null, mapActionToProps)(Counter);