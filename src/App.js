import React from "react";
import Message from "./components/Message";
import Usercard from "./components/usercard";

function App() {
  return (
    <div className="App">
      <Message msg="this is message" />
      <Usercard />
    </div>
  );
}

export default App;
