import React from 'react';
import {Statistics} from "./Statistics";

export const Header = (props) => {
  return (
    <header>
      <Statistics players={props.players}/>
      <h1>{props.title}</h1>
    </header>
  );
};
