import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.props.handleClick(this.props.idx);
  };
  getDieFace = () => {
    if (this.props.val === 1) return "one";
    if (this.props.val === 2) return "two";
    if (this.props.val === 3) return "three";
    if (this.props.val === 4) return "four";
    if (this.props.val === 5) return "five";
    if (this.props.val === 6) return "six";
  };
  render() {
    return (
      <button
        className={`Die${this.props.locked ? `-locked` : ``}${
          this.props.isRolling ? `-rolling` : ``
        }`}
        //style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        <i className={`Die fas fa-dice-${this.getDieFace()}`} />
      </button>
    );
  }
}

export default Die;
