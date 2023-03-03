import { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Sumit called");
    console.log("input ref", inputRef);
  };

  console.log("reffff", inputRef);

  return (
    <div>
      <h1>UnControlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="name" type="text" />
        <br />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default UncontrolledComponent;
