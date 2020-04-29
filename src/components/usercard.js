import React from "react";

class Usercard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mlgmontage",
      data: null,
    };
    this.fetch_data = this.fetch_data.bind(this);
  }

  fetch_data() {}

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState({
          data: jsonData,
        });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div>
        <h3>Usercard</h3>
        <button>Fetch data</button>
      </div>
    );
  }
}

export default Usercard;
