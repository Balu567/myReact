import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Second from "../Second";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item color="textPrimary">
            <Second msg="One" />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Second msg="Two" />
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
      </Grid>
    </Box>
  );
}
