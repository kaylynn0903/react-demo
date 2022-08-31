import React, { Component } from "react";
import Box from "./Box";
import "./index.css";

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 35,
    allColors: ["yellow", "purple", "gray", "black", "green", "pink"],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box color={this.props.allColors} />
    ));
    return <div className="ColorBoxes">{boxes}</div>;
  }
}

export default ColorBoxes;
