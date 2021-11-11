import React from "react";
import Fun1 from "./Fun1";
class Second extends React.Component {
  render() {
    return (
      <div>
        <h1>second class component {this.props.height + this.props.name} </h1>
        <Fun1 name="Baluabcdefg" age="23" height="5.4"></Fun1>
      </div>
    );
  }
}
//passing in constructor
Second.defaultProps = {
  height: "5.4",
};
export default Second;
