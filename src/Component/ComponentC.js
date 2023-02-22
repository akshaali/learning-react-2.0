import { useContext } from "react"
import {ContextInstance} from "../App";

const ComponentC = () => {
    const data = useContext(ContextInstance);
    console.log("props of componentC", data)
    return(
        <div>
            <h3> Component C</h3>
            <p>My name is : {data.name}</p>
            <button onClick={() => data.setName("jksahfkj")}>change name</button>
        </div>
    )
}
export default ComponentC


/*
To avoid Props drilling, we use context Apis or Redux 
COntext API 
1. create a context - (souce component)
2. use context -(destination component)
*/