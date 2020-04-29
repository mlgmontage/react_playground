import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    document.body.style.backgroundColor = e.target.value;
  }

  render() {
    return (
      <div>
        <h3>Greeting</h3>
        <select onChange={this.handleChange}>
          <option>white</option>
          <option>teal</option>
          <option>red</option>
          <option>green</option>
          <option>blue</option>
        </select>
      </div>
    );
  }
}

export default Greeting;
