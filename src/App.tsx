import moment from "moment";
import React from "react";
import { useAge } from "./hooks";

function App() {
  const { age, reset } = useAge(moment());

  return (
    <div className="App">
      <p>Last Updated: {age}</p>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
}

export default App;
