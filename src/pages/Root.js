import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./heros/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <Switch>
            <div className="container" style={{backgroundColor: '#ffffff'}}>
              <Route exact path="/" component={Home}/>
              <Route path="/heroes" component={Heroes}/>
              <Route path="/scoreboard" component={Scoreboard}/>
            </div>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}