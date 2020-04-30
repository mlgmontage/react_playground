import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: ["kitkat", "bison", "dread", "lucy", "pirate"],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    console.log(e.target.name);
  }

  render() {
    return (
      <div>
        <h3>List</h3>
        <ol>
          {this.state.records.map((entry, index) => (
            <div key={index}>
              <li>
                {entry}
                <button onClick={this.handleDelete} name={index}>
                  X
                </button>
              </li>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;
