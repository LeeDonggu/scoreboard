import React from 'react';
import {connect} from "react-redux";
import {addPlayer, updateTitle} from "../redux/actions";

class AddPlayerForm extends React.Component {
  // DOM에 접근하기 위한 참조값
  textInput = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };

  }

  handleValueChange = (e) => {
    this.setState({playerName: e.target.value});
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    // 부모에게 값 전달
    // this.props.addPlayer(this.textInput.current.value);
    // this.setState({
    //   playerName: ''
    // });
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref={this.textInput}/>
        {/*<input type="text" placeholder="enter a player's name" value={this.state.playerName}
               onChange={this.handleValueChange}/>*/}
        <input type="submit" value="Add Player"/>
      </form>

    );
  }
}


let mapActionToProps = (dispatch) => {
  return {
    addPlayer: (name) => dispatch(addPlayer(name)),
  };
};

export default connect(null, mapActionToProps)(AddPlayerForm)