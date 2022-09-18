import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.choice(this.props.color),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  choice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  pickColor() {
    let newColor;
    do {
      newColor = this.choice(this.props.color);
    } while (newColor === this.state.color);

    this.setState({
      color: newColor,
    });
  }

  handleClick() {
    this.pickColor();
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
