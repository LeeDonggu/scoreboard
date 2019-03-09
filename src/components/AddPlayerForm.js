import React from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";

class AddPlayerForm extends React.Component {
  // DOM에 접근하기 위한 참조값
  textInput = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };
  }

  // 입력값을 ref가 아닌 해당 방식으로도 저장 가능
  handleValueChange = (e) => {
    this.setState({playerName: e.target.value});
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref={this.textInput}/>
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