import ComponentB from "./ComponentB";

const ComponentA = (props) => {
    console.log("props of ComponentA", props);
  return (
    <div>
      <h1> Component A</h1>
      <ComponentB name={props.name}/>
    </div>
  );
};
export default ComponentA;
