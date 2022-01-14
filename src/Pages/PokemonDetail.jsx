import React from 'react'
import { Container, Grid, Paper } from "@material-ui/core";

export const PokemonDetail = () => {
    return (
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
        </Grid>
    )
}
