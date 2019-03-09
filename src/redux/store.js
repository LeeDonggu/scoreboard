import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";

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
      state.players.forEach((player) => player.id > maxId ? (maxId = player.id) : (maxId = maxId));
      return {
        ...state,
        players: [
          ...state.players,
          {name: action.name, score: 0, id: maxId + 1}
        ]
      };
    case CHANGE_SCORE:
      // 2가지 모두 동일한 방법
      // state.players.forEach(item => {
      //   if (item.id === action.index) {
      //     item.score += action.score
      //   }
      // });
      state.players.forEach((player) => player.id === action.index ? (player.score += action.score) : '');
      return {
        ...state,
        players: [
          ...state.players
        ]
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id)
      };
    default :
      return state;
  }
};

const allreducers = combineReducers({playerReducer});

export const store = createStore(allreducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);