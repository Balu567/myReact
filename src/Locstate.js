import React from "react";

class Locstate extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  doIncrement = () => {
    this.setState((prevState, props) => {
      console.log("oldvalue", prevState);
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.doIncrement}>
          click me {this.state.counter}
        </button>
      </div>
    );
  }
}
export default Locstate;
