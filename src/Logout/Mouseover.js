import React, { useState } from "react";
import Higherorder from "./Hoc";

function Mouseover(props) {
  return (
    <div>
      <h3 onMouseOver={props.incrementCounter}>
        this is mouseover {props.count}
        times
      </h3>
    </div>
  );
}

export default Higherorder(Mouseover);
