import React from "react";
import Fun1 from "./Fun1";
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>loading from first class component</h1>
        <Fun1 name="from first class component" age="23" height="5.4"></Fun1>
        <Fun1
          name="another reusable from first class component"
          age="23"
          height="5.4"
        ></Fun1>
      </div>
    );
  }
}
export default First;
