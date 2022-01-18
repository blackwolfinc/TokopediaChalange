import React from 'react'
import ApolloClient from "apollo-boost";
import { css, cx } from "@emotion/css";
import { gql } from "apollo-boost";
import { Container, Grid, Paper } from "@material-ui/core";

export const HandleAbility = (data) => {
    let handleData = data.data 
    return handleData.map((result) => {
        let abiltyName = result.ability.name;
        let abilityLink = result.ability.url;
  
        let client = new ApolloClient({
          uri: "https://graphql-pokeapi.graphcdn.app/",
        });
  
        client
          .query({
            query: gql`
                  query pokemon($name: String = "${abiltyName}") {
                    ability(ability : $name){
                      message
                      status
                      response
                    }
                  }
                `,
          })
          .then((hasil) => {
            // setDataPokemon2(hasil.data.pokemon);
            // console.log(hasil);
          });
  
        return (
          <Grid
            item
            xs={12}
           
            md={12}
            key={abiltyName}
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              text-align: center;
              flex-direction: row;
              background-color: #fff;
              border-radius: 12px;
              margin: 1rem 0rem !important;
              padding: 0rem 2rem;
              font-family: fantasy;
              font-weight: 100 !IMPORTANT;
            `}
          >
            <h3 
              className={css`
          
              font-weight: 100 !IMPORTANT;
              width: 100%
            `}
            >{abiltyName}</h3>
            {/* <h1>{efek}</h1> */}
            {/* {console.log(DataPokemon2)} */}
          </Grid>
        );
      });
}
