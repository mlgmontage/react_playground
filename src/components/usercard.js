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
        {!this.state.data ? (
          <h4>loading...</h4>
        ) : (
          <div>
            <img src={this.state.data.avatar_url}></img>
            <ul>
              <li>{this.state.data.login}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Usercard;
