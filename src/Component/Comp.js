import { useState } from "react";
import hocName from "./hoc";

const Comp = () => {
  const [name, setName] = useState("abc");

  console.log("states of memo component", name);
  return (
    <div>
      <h1> Component</h1>
      <h2>Name: {name}</h2>
      <button onClick={() => setName("xyz")}>CHange Name</button>
    </div>
  );
};

export default hocName(Comp);
