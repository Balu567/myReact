import React, { useState } from "react";
import Higherorder from "./Hoc";
import Button from "@mui/material/Button";

import theme from "../theme";
import Mouseover from "./Mouseover";
function Logout(props) {
  return (
    <div variant="h3" align="center" color="primary">
      <h1>This is logout</h1>
      <div>
        <Button class="ui button" onClick={props.incrementCounter}>
          clicked me {props.count}
          times
        </Button>
      </div>
      <Mouseover />
    </div>
  );
}

export default Higherorder(Logout);
