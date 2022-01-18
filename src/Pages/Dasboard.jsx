import React from "react";
import { css, cx } from "@emotion/css";
import logo from "../Assets/Img/PokeTitle.png";
import "../Assets/Scss/App.scss";
import { useNavigate } from "react-router-dom";



export const Dasboard = () => {
  const history = useNavigate();

  const HandletoPokemon =()=>{
    history(`/PokemonList`);
  }

  return (
    <div className="pokemon">
      <img
        className={css`
          //  background-color:red;
          width: 100%;
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
