import React from 'react';

export class AddPlayerForm extends React.Component {
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
    // 부모에게 값 전달
    this.props.addPlayer(this.state.playerName);
    this.setState({
      playerName: ''
    });
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" value={this.state.playerName}
               onChange={this.handleValueChange}/>
        <input type="submit" value="Add Player"/>
      </form>

    );
  }
}