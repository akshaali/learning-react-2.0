import { Component, PureComponent } from "react";

class SimpleComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      name: "simple",
    };
  }

  handleChangeName = () => {
    console.log("handleChangeName callee");
    this.setState({ name: "simple-changed" });
  };

  render() {
    console.log("render has been called");
    return (
      <div>
        <h1>Simple Component</h1>
        <h2>Name: {this.state.name}</h2>
        <button onClick={this.handleChangeName}>Change Name</button>
      </div>
    );
  }
}

export default SimpleComponent;
