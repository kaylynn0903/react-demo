import React, { Component } from "react";
import Ball from "./Ball";
import "./index.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 47,
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.generateBalls = this.generateBalls.bind(this);
  }

  generateBalls() {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="ball-container">
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.generateBalls}>Generate!</button>
      </div>
    );
  }
}

export default Lottery;
