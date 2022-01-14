import React, { Component, createContext, useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import useQuery from "@apollo/react-hooks";
import { gql } from "apollo-boost";
export const RootContex = createContext();
const Provider = RootContex.Provider;

//  const DataContextThis2fa-li = () => {
//     state ={

//     }

//   client
//     .query({
//       query: gql`
//       query pokemons($limit: Int, $offset: Int) {
//           pokemons(limit: $limit, offset: $offset) {
//             count
//             next
//             previous
//             status
//             message
//             results {
//               url
//               name
//               image
//             }
//           }
//         }
//       `
//     })
// .then( response => {
//         // console.log(response)
//      data = response
//           return "aku"
//     });

// }

class DataContextThis extends Component {
  render() {
    return <div></div>;
  }
}

// api Get

// penyedia
export const DataContext = (Childern) => {
  return class DataGlobal extends Component {
    state = {
      Dataini: 0,
      Data: "",
      DataUnit : ""
    };

    handle = () => {
      let client = new ApolloClient({
        uri: "https://graphql-pokeapi.graphcdn.app/",
      });

      client
        .query({
          query: gql`
            query pokemons($limit: Int = 30, $offset: Int) {
              pokemons(limit: $limit, offset: $offset) {
                count
                next
                previous
                status
                message
                results {
                  id
                  url
                  name
                  image
                  dreamworld
                }
              }
            }
          `,
        })
        .then((res) => {
      
          let result = (res.data.pokemons.results ? res.data.pokemons.results : [])
          let DataAllPokemon =[]
      
            result.map(x=>{
            
              client
              .query({
                query: gql`
                query pokemon($name:String = "${x.name}") {
                  pokemon(name : $name){
                    id
                    name
                    }
                  }
                `,
              }).then(
                (hasil) =>{
                
                  DataAllPokemon.push(hasil)
                  this.setState({
                    DataUnit :DataAllPokemon
                  });
                }
              )
              

            })
          
          this.setState({
            Data: res.data.pokemons,
          });
        });
    };

    componentDidMount() {
      this.handle();
    }

   
    handleChangeDispatach = (action) => {
      if (action.type === "PLUS ORDER") {
        return this.setState({
          Dataini: this.state.Dataini + 1,
        });
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            action: this.handleChangeDispatach,
          }}
        >
          <Childern {...this.props} />
        </Provider>
      );
    }
  };
};

// Pengguna
const ConsumerGlobal = RootContex.Consumer;
export const GlobalConsumer = (Childern) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <ConsumerGlobal>
          {(value) => {
            return <Childern {...this.props} {...value} />;
          }}
        </ConsumerGlobal>
      );
    }
  };
};
