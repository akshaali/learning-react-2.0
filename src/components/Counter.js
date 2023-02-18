import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count value: {count}</h1>
      <button disabled={count <= 0 ? true : false} onClick={handleDecrement}>
        Decreament -
      </button>
      <button onClick={handleIncrement}>Increament +</button>
    </div>
  );
};

export default Counter;
