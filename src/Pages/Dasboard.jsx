import React from "react";
import { css, cx } from "@emotion/css";
import logo from "../Assets/Img/PokeTitle.png";
import "../Assets/Scss/App.scss";
import { useNavigate } from "react-router-dom";



export const Dasboard = () => {
  const history = useNavigate();
  // webSettings.setDomStorageEnabled(true);
  const HandletoPokemon =()=>{
    history(`/PokemonList`);
  }

  return (
    <div className="pokemon">
      <img
        className={css`
          //  background-color:red;
          width: 100%;
          -webkit-animation: scale-up-hor-center 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;
	        animation: scale-up-hor-center 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;

          @-webkit-keyframes scale-up-hor-center {
            0% {
              -webkit-transform: scaleX(0.8);
                      transform: scaleX(0.8);
            }
            150% {
              -webkit-transform: scaleX(1);
                      transform: scaleX(1);
            }
            100% {
              -webkit-transform: scaleX(0.8);
                      transform: scaleX(0.8);
            }
          }
          @keyframes scale-up-hor-center {
            0% {
              -webkit-transform: scaleX(0.8);
                      transform: scaleX(0.8);
            }
            50% {
              -webkit-transform: scaleX(1);
                      transform: scaleX(1);
            }
            100% {
              -webkit-transform: scaleX(0.8);
                      transform: scaleX(0.8);
            }
          }
        `}
        src={logo}
        alt=""
      />
      <button
        className={css`
          padding: 1rem 2rem;
          border-radius: 12px;
          border: 4px solid #2d4596;
          background: rgb(248 149 0);
          text-transform: capitalize;
          color: #005066;
          font-size: x-large;
          font-weight: 200;
          font-family: fantasy;

          :hover{
            transform: scaleX(1.1);
          }
        `}
        onClick={()=>{
          HandletoPokemon()
        }}
      >
        start your journey
      </button>
    </div>
  );
};
