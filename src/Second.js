import React from "react";

import theme from "./theme";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";

export default function Second(msg) {
  console.log("This is msg", msg);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" align="center" color="primary">
          fun component {msg.msg}
        </Typography>
      </ThemeProvider>
    </div>
  );
}
//passing in constructor
