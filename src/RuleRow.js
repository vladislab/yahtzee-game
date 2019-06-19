import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: false };
  }
  handleClick = () => {
    if (!this.state.isDisabled) this.props.doScore();
    this.setState({ isDisabled: true });
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
        <td className="RuleRow-score">
          {this.state.isDisabled ? this.props.score : this.props.description}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
