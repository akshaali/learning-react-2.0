import { useState, createContext } from "react";
import "./App.css";
import ComponentA from "./Component/ComponentA";

export const ContextInstance = createContext();

function App() {
  const [name, setName] = useState("Aksha");
  return (
    <ContextInstance.Provider value={{ name: name, setName: setName, static: "Aggdjg" }}>
      <div className="App">
        <ComponentA name={name} />
      </div>
    </ContextInstance.Provider>
  );
}

export default App;
