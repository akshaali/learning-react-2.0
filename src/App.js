import "./App.css";
import { useState } from "react";
import Introduction from "./components/Introduction";
import Counter from "./components/Counter";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Introduction ageProp={10} nameProp={"qwerty"} /> : <Counter />}
      <button onClick={() => setShow(!show)}>Change render====</button>
    </div>
  );
}

export default App;
