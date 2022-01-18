import React, { useEffect, useState  ,useRef } from "react";
import {
  Container,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  ExpandMoreIcon,
  AccordionDetails,
  Dialog ,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle ,
  Button,
  TextField
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

import Pokeball from "../Assets/Img/pokeball.png";

export const PokemonDetail = () => {
  const checkparams = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get("name");
    return foo;
  };
  let myRef = React.createRef();
  const [param, setparam] = useState(checkparams());
  const [DataPokemon, setDataPokemon] = useState("");
  const [NamePokemon, setNamePokemon] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
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

  const delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  const HandleNewName=(e)=>{
    setNamePokemon(e.target.value)
  }

  const NewPokemonSubmit =()=>{

    window.localStorage.setItem( "newName" , NamePokemon )
    window.localStorage.setItem(   "dataPokemon" ,JSON.stringify(DataPokemon) )
  
    handleClose()
  }


  const handleChatch = () => {
    var min = 0;
    var max = 100;
    var rand = min + Math.random() * (max - min);
    delay(function () {
      if (rand >= 50) {
        handleClickOpen()
      }else{
        handleClickOpen2()
      }
    }, 2000); // end delay
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
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
              <div   ref= {myRef}>{DataPokemon.name}</div>
            </Grid>
          </Grid>
        </h1>
        <div
          className={css`
            display: flex;
            // padding: 3rem;
            border-radius: 12px;
            margin-bottom: -3rem;
          `}
         
        >
          <img
     
            className={css`
              width: -webkit-fill-available;
              filter: drop-shadow(0.6rem 0.8rem 0.35rem);
              max-width: 40rem !important ;
              max-height: 20rem !important ;
              margin-bottom: 10rem;
              margin-top: 1rem;

              -webkit-animation: scale-up-bottom 5s
                cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
                alternate-reverse both;
              animation: scale-up-bottom 5s
                cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
                alternate-reverse both;
              filter: drop-shadow(1rem 0.8rem 0rem dark);

              @-webkit-keyframes scale-up-bottom {
                0% {
                  -webkit-transform: scale(0.95);
                  transform: scale(0.95);
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
                  -webkit-transform: scale(0.95);
                  transform: scale(0.95);
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
            src={ImgFromLocal}
          />
        </div>

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
            <Grid
              md={12}
              className={css`
                max-height: 14rem;
                postion: relative;
                display: flex;
                justify-content: space-between;
              `}
            >
              <img
                onClick={() => {
                  handleChatch();
                }}
                className={css`
                  max-width: 20rem;
                  width: 100%;
                  margin: -13rem auto -19rem;

                  border-radius: 50%;
                  transform: scale(0.4);
                  position: absolute;
                  z-index: 3;
                  filter: drop-shadow(0.8rem -0.3rem 0.35rem);

                  :hover {
                    -webkit-animation: rotate-diagonal-2 0.6s linear infinite
                      alternate-reverse both;
                    animation: rotate-diagonal-2 0.6s linear infinite
                      alternate-reverse both;
                  }

                  @-webkit-keyframes rotate-diagonal-2 {
                    0% {
                      -webkit-transform: rotate3d(-1, 1, 0, 0deg) scale(0.5);
                      transform: rotate3d(-1, 1, 0, 0deg) scale(0.5);
                    }
                    50% {
                      -webkit-transform: rotate3d(-1, 1, 0, 180deg) scale(0.5);
                      transform: rotate3d(-1, 1, 0, 180deg) scale(0.5);
                    }
                    100% {
                      -webkit-transform: rotate3d(-1, 1, 0, 360deg) scale(0.5);
                      transform: rotate3d(-1, 1, 0, 360deg) scale(0.5);
                    }
                  }
                  @keyframes rotate-diagonal-2 {
                    0% {
                      -webkit-transform: rotate3d(-1, 1, 0, 0deg) scale(1);
                      transform: rotate3d(-1, 1, 0, 0deg) scale(1);
                      margin-top: -30rem;
                    }
                    50% {
                      -webkit-transform: rotate3d(1, -1, 0, 180deg) scale(0.5);
                      transform: rotate3d(1, -1, 0, 180deg) scale(0.5);
                    }
                    100% {
                      -webkit-transform: rotate3d(1, 1, -1, 360deg) scale(0.5);
                      transform: rotate3d(1, 1, -1, 360deg) scale(0.5);
                    }
                  }
                `}
                src={Pokeball}
                alt=""
              />
            </Grid>
          </Grid>
            {/* Dialog 1 */}
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Congrats you got a new pokemon "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> 
            <TextField onChange={(e)=>{HandleNewName(e)}} id="outlined-basic" label="Pokemon New Name " variant="outlined" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Release
          </Button>
          <Button onClick={()=>{NewPokemonSubmit()}} variant="contained" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog 2  */}
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"sorry you failed to catch this pokemon, keep the spirit repeat again :)"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2} variant="contained" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
