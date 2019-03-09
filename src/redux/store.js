import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, UPDATE_TITLE} from "./actionTypes";

const playerInitialState = {
  title: 'STORE SCOREBOARD',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ],
};


const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case ADD_PLAYER:
      let maxId = 0;
      state.players.forEach((item) => item.id > maxId ? (maxId = item.id) : (maxId = maxId));
      return {
        ...state,
        players: [
          ...state.players,
          {name: action.name, score: 0, id: maxId + 1}
        ],
      };
    default :
      return state;
  }
};

const allreducers = combineReducers({playerReducer});

export const store = createStore(allreducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);