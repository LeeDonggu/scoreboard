import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
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