import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.msg}</h3>
      </div>
    );
  }
}

export default Message;
