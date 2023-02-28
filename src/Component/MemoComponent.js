import {memo, useState} from "react";

const MemoComponent = () => {
    const [name, setName] = useState("abc");

    console.log("states of memo component", name)
    return(
        <div>
            <h1>MemoComponent</h1>
            <h2>Name: {name}</h2>
            <button onClick={() => setName("xyz")}>CHange Name</button>
        </div>
    )
}

export default memo(MemoComponent);