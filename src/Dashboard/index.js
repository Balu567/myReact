import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Second from "../Second";
import Details from "../Details";
import Login from "../Login";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <div>
      <Box
        sx={{
          // width: 1400,
          // height: 300,
          flexGrow: 10,
          hover: {
            backgroundColor: "secondary.main",
            opacity: [0.9, 0.8, 0.7],
          },

          // backgroundColor: "secondary.dark",
          // "&:hover": {
          //   backgroundColor: "secondary.main",
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <Grid container spacing={2}>
          {/* <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}> */}
          <Grid item xs={8}>
            <Item color="textPrimary">
              <Second msg="One" />
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item>
              <Second msg="Two" />
              {/* <Login /> */}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Second msg="Three" />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Second msg="Four" />
            </Item>
          </Grid>
          {/* </Paper> */}
        </Grid>
      </Box>
    </div>
  );
}
