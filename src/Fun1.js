import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { HELLO_QUERY } from "./queries";
import "./style.css";
function Fun1(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <text>Loading...</text>;
  console.log(loading);
  return (
    <div className="fun1css">
      name is {props.name}
      height is {props.height}
      age is {props.age}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Fun1;
