import React from "react";
import "../styles/calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: "", operation: "+", accumulator: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      first: this.state.first + e.target.name,
    });
  }

  handleOperation(e) {
    e.preventDefault();
    this.setState({
      operation: e.target.name,
    });
  }

  handleEqual(e) {
    e.preventDefault();

    if (this.state.operation === "+") {
      this.setState({
        accumulator: this.state.accumulator + parseInt(this.state.first),
      });
    } else if (this.state.operation === "-") {
      this.setState({
        accumulator: this.state.accumulator - parseInt(this.state.first),
      });
    } else if (this.state.operation === "*") {
      this.setState({
        accumulator: this.state.accumulator * parseInt(this.state.first),
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div id="calculator">
        <h3>{this.state.accumulator}</h3>
        <div id="display">{this.state.first}</div>
        <form>
          <div>
            <button onClick={this.handleClick} name="1">
              1
            </button>
            <button onClick={this.handleClick} name="2">
              2
            </button>
            <button onClick={this.handleClick} name="3">
              3
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="4">
              4
            </button>
            <button onClick={this.handleClick} name="5">
              5
            </button>
            <button onClick={this.handleClick} name="6">
              6
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="7">
              7
            </button>
            <button onClick={this.handleClick} name="8">
              8
            </button>
            <button onClick={this.handleClick} name="9">
              9
            </button>
          </div>
          <div>
            <button onClick={this.handleOperation} name="+">
              +
            </button>
            <button onClick={this.handleOperation} name="-">
              -
            </button>
            <button onClick={this.handleOperation} name="*">
              *
            </button>
          </div>
          <div>
            <button onClick={this.handleEqual} name="=">
              =
            </button>
            <button disabled>{this.state.operation}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
