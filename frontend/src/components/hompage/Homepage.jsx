import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Homepage = () => {
  return (
    <Grid container spacing={3} align="center" justifyContent="center">
      <Grid item>
        <Paper>item 1</Paper>
      </Grid>
      <Grid item>
        <Paper>item 2</Paper>
      </Grid>
      <Grid item>
        <Paper>item 3</Paper>
      </Grid>
      <Grid item>
        <Paper>item 4</Paper>
      </Grid>
    </Grid>
  );
};

export default Homepage;
