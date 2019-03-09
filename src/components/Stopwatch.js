import React from 'react';

import styles from '../pages/scoreboard/Scoreboard.module.css';

export class Stopwatch extends React.Component {
  timeRef;  // public 속성

  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timer: 0,
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
  };

  render() {
    return (
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <span className={styles["stopwatch-time"]}>{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button>Reset</button>
      </div>

    );
  }

  // 돔이 생성된 직후
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({
          timer: prevState.timer + 1
        })
      );
    }
  };

  // 돔이 파괴 되기 직전
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}