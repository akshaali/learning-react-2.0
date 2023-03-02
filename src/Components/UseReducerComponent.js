import { useReducer } from "react";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const UseReducerComponent = () => {
  const [info, dispatch] = useReducer(reducer, {
    name: { value: "", error: "" },
    email: { value: "", error: "" },
  });

  function reducer(state, action) {
    console.log("state-action", state, action);
    switch (action.type) {
      case "EMAIL": {
        let error = "";
        if (emailRegex.test(action.value)) {
          error = "";
        } else {
          error = "Please enter a valid email address";
        }
        return { ...state, email: { value: action.value, error: error } };
      }
      case "NAME": {
        let error = "";
        if (action.value.length < 2) {
          error = "Please enter a valid name";
        } else {
          error = "";
        }
        return { ...state, name: { value: action.value, error: error } };
      }
      default: {
        return state;
      }
    }
  }

  console.log("infoooooo", info);

  return (
    <div>
      <h1>Use Reducer Component</h1>
      <input
        placeholder="email"
        value={info?.email?.value}
        onChange={(e) => dispatch({ type: "EMAIL", value: e.target.value })}
      />
      <br />
      <span style={{ color: "red" }}>{info?.email?.error}</span>
      <br />
      <input
        placeholder="name"
        value={info?.name?.value}
        onChange={(e) => dispatch({ type: "NAME", value: e.target.value })}
      />
      <br />
      <span style={{ color: "red" }}>{info?.name?.error}</span>
    </div>
  );
};

export default UseReducerComponent;
