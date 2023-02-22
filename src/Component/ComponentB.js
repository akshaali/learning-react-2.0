import ComponentC from "./ComponentC"

const ComponentB = (props) => {
    console.log("props of ComponentB", props)
    return(
        <div>
            <h2> Component B</h2>
            <ComponentC name={props.name}/>
        </div>
    )
}
export default ComponentB