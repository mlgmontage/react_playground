import React from "react";
import Message from "./components/Message";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Message msg="this is message" />
      <Greeting />
    </div>
  );
}

export default App;
