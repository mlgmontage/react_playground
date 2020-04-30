import React from "react";
import Message from "./components/Message";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Message msg="this is message" />
      <Quiz />
    </div>
  );
}

export default App;
