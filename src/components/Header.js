import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

export const Header = ({players, title}) => {
  // const {players, title} = props;
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch/>
    </header>
  );
};

Header.propTypes = {
  players: PropTypes.string,
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Scoreboard'
};