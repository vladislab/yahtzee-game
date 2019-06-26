import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
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
    let classes = `Die fas fa-dice-${this.getDieFace()} fa-5x `;
    if (this.props.locked) classes += "Die-locked ";
    if (this.props.isRolling) classes += "Die-rolling ";

    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Die;
