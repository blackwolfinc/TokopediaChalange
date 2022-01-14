import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dasboard } from "../../Pages/Dasboard";
import { MyPokemonList } from "../../Pages/MyPokemonList";
import { PokemonDetail } from "../../Pages/PokemonDetail";
import { PokemonList } from "../../Pages/PokemonList";

export default class RoutesProject extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="MyPokemonList" element={<MyPokemonList />} />
              <Route path="PokemonDetail" element={<PokemonDetail />} />
              <Route path="PokemonList" element={<PokemonList />} />
              <Route path="/" element={<Dasboard />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    
    );
  }
}
