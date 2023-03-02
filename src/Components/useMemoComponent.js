import { useState, useCallback, useMemo } from "react";

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hi");
  const memorizedValue = useMemo(() => {
    return count*count*count*count
  }, [count]);

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
      <h1>Use Memo Component</h1>
      <input value={name} onChange={handleChangeName} />
      <h2>Memorised Value : {memorizedValue}</h2>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Increament Count</button>
    </div>
  );
};

export default UseMemoComponent;
