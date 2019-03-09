import React from 'react';
import Statistics from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

const Header = ({players, title2, changeTitle}) => {
  // const {players, title} = props;
  return (
    <header>
      <Statistics players={players}/>
      <h1 onClick={() => changeTitle('test scoreboard')}>{title2}</h1>
      <Stopwatch/>
    </header>
  );
};

Header.propTypes = {
  players: PropTypes.string,
  title2: PropTypes.string,
};

Header.defaultProps = {
  title2: 'Scoreboard'
};

let mapStateToProps = (state) => {
  return {
    title2: state.playerReducer.title
  }
};

// action을 dispatch하는 펑션을 props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeTitle: (title) => dispatch(updateTitle(title)),
  };
};

export default connect(mapStateToProps, mapActionToProps)(Header);