import React from "react";
import Message from "./components/Message";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <Message msg="this is message" />
      <List />
    </div>
  );
}

export default App;
