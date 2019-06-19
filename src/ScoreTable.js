import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "./Rules";

class ScoreTable extends Component {
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                doScore={evt => doScore("ones", ones.evalRoll)}
                description="Score 1 for every 1"
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                doScore={evt => doScore("twos", twos.evalRoll)}
                description="Score 2 for every 2"
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                doScore={evt => doScore("threes", threes.evalRoll)}
                description="Score 3 for every 3"
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                doScore={evt => doScore("fours", fours.evalRoll)}
                description="Score 4 for every 4"
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                doScore={evt => doScore("fives", fives.evalRoll)}
                description="Score 5 for every 5"
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                doScore={evt => doScore("sixes", sixes.evalRoll)}
                description="Score 6 for every 6"
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)}
                description="If 3+ of one value, score sum of all dice (else 0)"
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)}
                description="If 4+ of one value, score sum of all dice (else 0)"
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                doScore={evt => doScore("fullHouse", fullHouse.evalRoll)}
                description="If 3 of one value and 2 of another, score 25 (else 0)"
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                doScore={evt =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
                description="If 4+ values in a row, score 30 (else 0)"
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                doScore={evt =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
                description="If 5 values in a row, score 40 (else 0)"
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                doScore={evt => doScore("yahtzee", yahtzee.evalRoll)}
                description="If all values match, score 50 (else 0)"
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                doScore={evt => doScore("chance", chance.evalRoll)}
                description="Score sum of all dice"
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
