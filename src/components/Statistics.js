import React from 'react';

export const Statistics = (props) => {
  const players = props.players.length;
  let totalScore = 0;
  props.players.forEach(item => totalScore += item.score);

  return (
    // table>tbody>tr*2>td*2 + Tab 을 누르면 자동으로 html table을 만들어줌

    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{players}</td>
      </tr>
      <tr>
        <td>Total Score:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
};