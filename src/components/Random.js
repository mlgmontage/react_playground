import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({
      number: parseInt(Math.random() * 100),
    });
  }

  render() {
    return (
      <div>
        <h3 style={{ color: "red", fontSize: "48px", fontFamily: "Arial" }}>
          Random Number {this.state.number}
        </h3>
        <button onClick={this.generateRandom}>generate</button>
      </div>
    );
  }
}

export default Random;
