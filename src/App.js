import React from "react";
import Message from "./components/Message";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <Message msg="this is message" />
      <Random />
    </div>
  );
}

export default App;
