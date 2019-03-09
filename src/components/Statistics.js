import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Statistics = (props) => {
  const players = props.storePlayers.length;
  let totalScore = 0;
  props.storePlayers.forEach(item => totalScore += item.score);

  return (
    // table>tbody>tr*2>td*2 + Tab 을 누르면 자동으로 html table을 만들어줌

    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{players}</td>
      </tr>
      <tr>
        <td>Total Score:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
};

Statistics.propTypes = {
  storePlayers: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

let mapStateToProps = (state) => {
  return {
    storePlayers: state.playerReducer.players,
  };
};

export default connect(mapStateToProps)(Statistics)