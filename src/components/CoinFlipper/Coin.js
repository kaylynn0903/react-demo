import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <i className={this.props.info.imgSrc}></i>
      </div>
    );
  }
}

export default Coin;
