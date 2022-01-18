import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  ExpandMoreIcon,
  AccordionDetails,
} from "@material-ui/core";
import ApolloClient from "apollo-boost";
import { useHistory } from "react-router-dom";
import { gql } from "apollo-boost";
import { css, cx } from "@emotion/css";
import { HandleTypes } from "../Components/HandleTypes";
import { HandleAbility } from "../Components/HandleAbility";
import { HandlePokemonStat } from "../Components/HandlePokemonStat";
import { HandleMoves } from "../Components/HandleMoves";
import { makeStyles } from "@material-ui/core/styles";

import SimpleTabs from "../Components/LayoutDetailCard";
export const PokemonDetail = () => {
  const checkparams = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get("name");
    return foo;
  };
  const [param, setparam] = useState(checkparams());
  const [DataPokemon, setDataPokemon] = useState("");
  const [DataPokemon2, setDataPokemon2] = useState("");
  const [ImgFromLocal, setImgFromLocal] = useState(
    window.localStorage.getItem("img")
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles();

  const getPokemonDetail = () => {
    let client = new ApolloClient({
      uri: "https://graphql-pokeapi.graphcdn.app/",
    });

    client
      .query({
        query: gql`
          query pokemon($name: String = "${param}") {
            pokemon(name: $name) {
              id
              name
              types {
                type {
                  name
                }
              }
              height
              moves{
                move{name}
              }
              species {
                url
              }
              stats {
                base_stat
                effort

                stat {
                  name
                  url
                }
              }
              abilities {
                ability {
                  url

                  name
                }
              }
            }
          }
        `,
      })
      .then((hasil) => {
        setDataPokemon(hasil.data.pokemon);
      });
  };

  useEffect(() => {
    // checkparams();
    getPokemonDetail();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h1
          className={css`
            display: flex;
            background-color: #fff;
            padding: 1rem;
            border-radius: 12px;
            width: -webkit-fill-available;
            box-shadow: 20px 20px 60px #d9a250, -20px -20px 60px #ffdc6c;
          `}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              className={css`
                display: flex;
                justify-content: center;
                text-transform: uppercase !important;
                font-family: sans-serif;
                color: darkgoldenrod;
              `}
            >
              <div>{DataPokemon.name}</div>
            </Grid>
          </Grid>
        </h1>

        <img
          className={css`
            width: -webkit-fill-available;
            filter: drop-shadow(0.6rem 0.8rem 0.35rem);
            max-width: 40rem !important ;
            max-height: 20rem !important ;
            margin-bottom: 5rem;
          `}
          src={ImgFromLocal}
        />
        <Grid
          container
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            background-color: #fff;
            padding: 2rem;
            border-radius: 12px;
          `}
        >
          <Grid container>
            <Grid item xs={12}>
              {/*  */}

              <Accordion>
                <AccordionSummary
                  expandIcon={""}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    <h3>Pokemon Stats</h3>
                  </Typography>
                  <Grid
                    container
                    className={css`
                      justify-content: flex-end;
                      margin-bottom: 1rem;
                    `}
                  >
                    {DataPokemon ? (
                      <HandleTypes data={DataPokemon.types} />
                    ) : (
                      ""
                    )}
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item xs={12}>
                      {DataPokemon ? (
                        <HandlePokemonStat data={DataPokemon.stats} />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            className={css`
              margin-top: 3rem;
            `}
          >
            
            {DataPokemon ? <SimpleTabs data={DataPokemon} /> : ""}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
