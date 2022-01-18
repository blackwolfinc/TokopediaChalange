import { Container, Grid, Paper } from "@material-ui/core";
import { css, cx } from "@emotion/css";

import React, { Component } from "react";
import { GlobalConsumer } from "../contexts/DataContext";

class MyPokemonList extends Component {
  
  state = {
    dataPokemon: this.props.state.Data,
  };

  handleMove = (props, img) => {
    this.props.setImg(img);

    window.location = `/PokemonDetail?name=${props}`;
  };

 
  HnadleMapCard = () => {
    let data = JSON.parse(sessionStorage.getItem("dataPokemon"))
    let dataLenght = data ? data.length : 0;

    function arrayRemove(arr, value) { 
    
      return arr.filter(function(ele){
          return ele.idNew != value; 
      });
  }
  

    const handleRemove=(e)=>{
      sessionStorage.setItem("dataPokemon", JSON.stringify(arrayRemove(data , e.target.id)));
      window.location.reload();
    }
  
    return (
      <Grid container spacing={5}>
        {" "}
        {data
          ? data.map((x) => (
              <Grid
      
                key={x.idNew}
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
                  onClick={() => {
                    this.handleMove(x.name, x.imgPokemon);
                  }}
                  className={css`
                    display: flex;
                    justify-content: center;
                  `}
                >
                  <img
                    src={x.imgPokemon}
                    alt=""
                    className={css`
                      max-width: 17rem;
                      height: 17rem;
                      margin-top: -4rem;
                      filter: drop-shadow(0.6rem 0.8rem 0.35rem);

                     :hover{
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
                      font-family: fantasy;
                      font-weight: 100;
                      font-size: 18px;

                      background-color: beige;
                      width: 100%;
                      text-align: center;
                      height: fit-content;
                    `}
                  >
                    {x.newName}
                  </h3>
                </Grid>
                <button 
                 className={css`
             
                 border: 3px solid #dfa041;
                 display: flex;
                 justify-content: center;
                 border-radius: 12px;
                padding:1rem 3rem ;
                width: 100%;
                text-transform: uppercase;
                background-color: orangered;
                color: aliceblue;
                      
                //  box-shadow: 35px -35px 70px #bababa7c, -35px 35px 70px #ffffff;
               `}
                
                id={x.idNew} onClick={(e)=>{handleRemove(e)}}>release</button>
             

              </Grid>
            ))
          : ""}
      </Grid>
    );
  };

  handleLinkMap = () => {
    let data = JSON.parse(sessionStorage.getItem("dataPokemon"))
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
                key={x.idNew}
                item
                xs={12}
                md={12}
                onClick={() => {
                  this.handleMove(x.name, x.imgPokemon);
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
                  {x.newName}
                </h3>
              </button>
            ))
          : "No Result"}
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
export default GlobalConsumer(MyPokemonList);
