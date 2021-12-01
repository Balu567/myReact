import React, { useState } from "react";

const Higherorder = (Component) => {
  function WithCounter() {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      setCount(count + 1);
    };
    return <Component incrementCounter={incrementCounter} count={count} />;
  }
  return WithCounter;
};

export default Higherorder;
