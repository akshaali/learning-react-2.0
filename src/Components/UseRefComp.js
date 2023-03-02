import { useState, useRef, useEffect } from "react";
const UseRefComponent = () => {
  const [name, setName] = useState("");
  let renderCount = useRef(0);

  const handleChangeCount = (event) => {
    setName(event.target.value);
  };
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("component re-rendered");
  });

  console.log("count: ", renderCount);
  return (
    <div>
      <h1>Use Ref</h1>
      <input value={name} onChange={handleChangeCount} />
    </div>
  );
};

export default UseRefComponent;
