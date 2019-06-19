import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: false };
  }
  handleClick = () => {
    this.setState({ isDisabled: true });
    this.props.doScore();
  };
  render() {
    return (
      <tr
        className={`RuleRow RuleRow-${
          this.state.isDisabled ? `disabled` : `active`
        }`}
        onClick={this.handleClick}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
