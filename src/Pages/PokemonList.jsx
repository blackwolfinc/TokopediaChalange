import React, { Component } from "react";
import { GlobalConsumer } from "../contexts/DataContext";
import { Container, Grid, Paper } from "@material-ui/core";
import { CardPokemon } from "../Components/CardPokemon";
import { css, cx } from "@emotion/css";

class PokemonList extends Component {
  state = {
    dataPokemon: this.props.state.Data,
  };

  HnadleMapCard = () => {
    let data = this.props.state.Data.results;
    let dataLenght = data ? data.length : 0;
    return (
      <Grid container spacing={5}>
        {" "}
        {data
          ? data.map((x) => (
              <Grid
                key={x.id}
                container
                xs={12}
                md={3}
                className={css`
                  margin-top: 6rem;
                  margin-left: 2rem;
                  margin-right: 2rem;
                  border: 3px solid #bababa7c;
                  display: flex;
                  justify-content: center;
                  border-radius: 12px;
                  min-height: 20rem;
                  background-color: rgb(203 140 46 / 62%);
                  box-shadow: 35px -35px 70px #bababa7c, -35px 35px 70px #ffffff;
                `}
              >
                <Grid
                  item
                  xs={12}
                  md={12}
                  className={css`
                    display: flex;
                    justify-content: center;
                  `}
                >
                  <img
                    src={x.dreamworld}
                    alt=""
                    className={css`
                      max-width: 17rem;
                      height: 17rem;
                      margin-top: -4rem;
                      filter: drop-shadow(0.6rem 0.8rem 0.35rem);
                    `}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  className={css`
                    display: flex;
                    justify-content: center;
                    // background-color: black;
                    // color : #fff;
                    border-bottom-right-radius: 12px;
                    border-bottom-left-radius: 12px;
                    margin-top: 2rem;
                  `}
                >
                  <h3
                    className={css`
                      text-transform: uppercase;
                      font-family: monospace;
                      font-size: 12px;
                    `}
                  >
                    {x.name}
                  </h3>
                </Grid>
              </Grid>
            ))
          : ""}
      </Grid>
    );
  };

  handleLinkMap = () => {
    let data = this.props.state.Data.results;
    let dataLenght = data ? data.length : 0;

    return (
      <Grid
        className={css`
          margin-top: 4.5rem;
        `}
      >
        <h2>Pokemon List</h2>
        {data
          ? data.map((x) => (
              <button
                item
                xs={12}
                md={12}
                className={css`
                  display: flex;
                  justify-content: left;
                  background-color: rgb(203 140 46 / 62%);
                  // color : #fff;
                  margin: 1rem 0rem !important;
                  padding : 0.5rem 2rem !important;
                  border-radius : 12px ;
                  border: 1px solid #6d4710;
                  width: -webkit-fill-available;
                `}
              >
                <h3
                  className={css`
                    text-transform: uppercase;
                    font-family: monospace;
                    font-size: 12px;
                  `}
                >
                  {x.name}
                </h3>
              </button>
            ))
          : ""}
      </Grid>
    );
  };

  render() {
    return (
      <Grid
        container
        className={css`
          margin-top: 3rem;
          margin-botom  : 3rem
        `}
        spacing={3}
      >
        <Grid item xs={12} md={9}>
          {/* <CardPokemon value={this.props.state.Data}/> */}

          {this.HnadleMapCard(this.props.state.Data)}
        </Grid>
        <Grid item xs={12} md={3}>
          {this.handleLinkMap(this.props.state.Data)}
        </Grid>
      </Grid>
    );
  }
}

export default GlobalConsumer(PokemonList);
