import React from 'react';
import axios from "axios";

import './Heroes.module.scss';
import {Hero} from "./Hero";
import {Route, Switch} from "react-router-dom";

export class Heroes extends React.Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    let response = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    console.log(response);
    this.setState({
      heroes: response.data
    });
  };

  handleClick = (e, hero_id) => {
    // console.log(event, hero_id);
    e.preventDefault();
    this.props.history.push(`/heroes/hero/${hero_id}`);
  };

  render() {
    return (
      <>
        <Switch>
          <Route path="/heroes/hero/:hero_id" component={Hero}/>
        </Switch>


        <div className="card-columns">
          {this.state.heroes.map(hero => (
            <div className="card" key={hero.hero_id} onClick={(e) => this.handleClick(e, hero.hero_id)}
                 style={{cursor: 'pointer'}}>
              <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                   style={{width: '100%'}} alt={hero.name}/>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}