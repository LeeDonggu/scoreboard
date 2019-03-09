import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {changeScore, index, score} = this.props;

    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={() => changeScore(index, -1)}>-</button>
        <span className="counter-score">{score}</span>
        <button className='counter-action increment' onClick={() => changeScore(index, 1)}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  changeScore: PropTypes.func,
  index: PropTypes.number,
  score: PropTypes.number,
};

// let mapStateToProps = (state) => {
//   return {
//     score: state.playerReducer.players.score,
//     index: state.playerReducer.players.id
//   };
// };

// action을 dispatch하는 펑션을 props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeScore: (index, score) => dispatch(changeScore(index, score)),
  };
};

export default connect(null, mapActionToProps)(Counter);