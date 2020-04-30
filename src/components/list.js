import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["one", "two", "three", "four"],
    };
  }

  render() {
    return (
      <div>
        <h2 style={{ color: "teal" }}>Tree</h2>
        {this.state.list.map((item) => {
          return <li>{item}</li>;
        })}
      </div>
    );
  }
}

export default List;
