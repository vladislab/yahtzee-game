import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: false };
  }
  handleClick = () => {
    if (!this.state.isDisabled && !this.props.isRolling) {
      this.props.doScore();
      this.setState({ isDisabled: true });
    }
  };
  render() {
    return (
      <tr
        className={`RuleRow ${
          this.state.isDisabled ? `RuleRow-disabled` : `RuleRow-active`
        }
        ${this.props.isRolling ? `RuleRow-rolling` : ``}`}
        onClick={this.handleClick}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {this.state.isDisabled ? this.props.score : this.props.description}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
