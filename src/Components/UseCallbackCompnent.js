import { useState, useCallback } from "react";

const UseCallBackComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hi");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleCount = useCallback(() => {
    console.log("name", name);
    setCount(count + 1);
  }, [count, name]);

  console.log("name-state", name);

  return (
    <div>
      <h1>Use Callbacks Component</h1>
      <input value={name} onChange={handleChangeName} />
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Increament Count</button>
    </div>
  );
};

export default UseCallBackComponent;
