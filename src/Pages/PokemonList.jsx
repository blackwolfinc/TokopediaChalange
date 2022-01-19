import React, { Component } from "react";
import { GlobalConsumer } from "../contexts/DataContext";
import { Container, Grid, Paper } from "@material-ui/core";
import { CardPokemon } from "../Components/CardPokemon";
import { css, cx } from "@emotion/css";
import { withRouter } from "react-router-dom";

class PokemonList extends Component {
  state = {
    dataPokemon: this.props.state.Data,
  };

  handleMove = (props, img) => {
    this.props.setImg(img);

    window.location = `/PokemonDetail?name=${props}`;
  };

  HnadleMapCard = () => {
    let data = this.props.state.Data.results;
    
    return (
      <Grid container spacing={5}>
        {" "}
        {data
          ? data.map((x) => (
              <Grid
                onClick={() => {
                  this.handleMove(x.name, x.dreamworld);
                }}
                key={x.id}
                container
                
                xs={12}
                md={3}
                item

                className={css`
                  margin-top: 6rem !important;
                  margin-left: 2rem !important;
                  margin-right: 2rem !important;
                  border: 3px solid #0d131ae6;
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

                      :hover {
                        -webkit-animation: scale-up-bottom 2s
                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
                          alternate-reverse both;
                        animation: scale-up-bottom 2s
                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
                          alternate-reverse both;
                        filter: drop-shadow(1rem 0.8rem 0rem red);
                      }

                      @-webkit-keyframes scale-up-bottom {
                        0% {
                          -webkit-transform: scale(0.9);
                          transform: scale(0.9);
                          -webkit-transform-origin: 50% 100%;
                          transform-origin: 50% 100%;
                        }
                        100% {
                          -webkit-transform: scale(1);
                          transform: scale(1);
                          -webkit-transform-origin: 50% 100%;
                          transform-origin: 50% 100%;
                        }
                      }
                      @keyframes scale-up-bottom {
                        0% {
                          -webkit-transform: scale(0.9);
                          transform: scale(0.9);
                          -webkit-transform-origin: 50% 100%;
                          transform-origin: 50% 100%;
                        }
                        100% {
                          -webkit-transform: scale(1);
                          transform: scale(1);
                          -webkit-transform-origin: 50% 100%;
                          transform-origin: 50% 100%;
                        }
                      }
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
                      font-size: 18px;

                      background-color: beige;
                      width: 100%;
                      text-align: center;
                      height: fit-content;
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
                key={x.id}
                item
                xs={12}
                md={12}
                onClick={() => {
                  this.handleMove(x.name, x.dreamworld);
                }}
                className={css`
                  display: flex;
                  justify-content: left;
                  background-color: rgb(203 140 46 / 62%);
                  // color : #fff;
                  margin: 1rem 0rem !important;
                  padding: 0.5rem 2rem !important;
                  border-radius: 12px;
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
          margin-botom: 3rem;
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
