import React, { Component, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { Dasboard } from "../../Pages/Dasboard";
import { PokemonDetail } from "../../Pages/PokemonDetail";
import  PokemonList  from "../../Pages/PokemonList";
import MyPokemonList from "../../Pages/MyPokemonList";
import { Apolo } from "../Apolo";

class RoutesProject extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="MyPokemonList" element={<MyPokemonList />}></Route>
            <Route path="PokemonDetail" element={<PokemonDetail />} />
            <Route path="PokemonList" element={<PokemonList />} />
            <Route path="/" element={<Apolo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default DataContext(RoutesProject);
