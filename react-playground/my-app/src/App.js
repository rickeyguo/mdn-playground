import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </>
  );
}

export default App;
