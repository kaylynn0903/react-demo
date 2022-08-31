import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";
import "./index.css";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "head", imgSrc: "fa-solid fa-face-smile" },
      { side: "tail", imgSrc: "fa-solid fa-face-meh-blank" },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((prevState) => {
      return {
        currCoin: newCoin,
        nFlips: prevState.nFlips + 1,
        nHeads: prevState.nHeads + (newCoin.side === "head" ? 1 : 0),
        nTails: prevState.nTails + (newCoin.side === "tail" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip here!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
