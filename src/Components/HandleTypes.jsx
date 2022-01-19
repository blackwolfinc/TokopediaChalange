import React from "react";
import {  Grid } from "@material-ui/core";
import { css,  } from "@emotion/css";

export const HandleTypes = (data) => {
  let hendleData = data.data;

  return data
    ? hendleData.map((result ,id) => {
        return (
          <Grid item xs={2}>
            {/* {result.type.name} */}
            {result.type.name === "fire" ? (
              <div
              key={1}
                className={css`
                  align-items: center;
                  text-align: center;
                  background-color: Red;
                  color: #fff;
                  border-radius: 12px;
                max-width: 2rem;
                font-family: fantasy;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                F
              </div>
            ) : (
              ""
            )}
            {result.type.name === "grass" ? (
              <div
              key={2}
                className={css`
                  align-items: center;
                  text-align: center;
                  background-color: green;
                  color: #000;
                  border-radius: 12px;
                max-width: 2rem;
                font-family: fantasy;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                G
              </div>
            ) : (
              ""
            )}
            {result.type.name === "poison" ? (
              <div
              key={3}
                className={css`
                  align-items: center;
                  text-align: center;
                  background-color: purple;
                  font-family: fantasy;
                  color: #fff;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                P
              </div>
            ) : (
              ""
            )}
            {result.type.name === "flying" ? (
              <div
              key={4}
                className={css`
                  align-items: center;
                  text-align: center;
                  font-family: fantasy;
                  background-color: gray;
                  color: #000;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                FL
              </div>
            ) : (
              ""
            )}
            {result.type.name === "water" ? (
              <div
              key={5}
                className={css`
                  align-items: center;
                  font-family: fantasy;
                  text-align: center;
                  background-color: #84cabf;
                  color: #000;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                W
              </div>
            ) : (
              ""
            )}
            {result.type.name === "bug" ? (
              <div
              key={6}
                className={css`
                  align-items: center;
                  text-align: center;
                  font-family: fantasy;
                  background-color: #6cba5a;
                  color: #000;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                B
              </div>
            ) : (
              ""
            )}
            {result.type.name === "normal" ? (
              <div
              key={7}
                className={css`
                  align-items: center;
                  text-align: center;
                  background-color: black;
                  font-family: fantasy;
                  color: #fff;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                N
              </div>
            ) : (
              ""
            )}

            {result.type.name === "electric" ? (
              <div
              key={8}
                className={css`
                  align-items: center;
                  text-align: center;
                  font-family: fantasy;
                  background-color: #f9be00;
                  color: #fff;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                E
              </div>
            ) : (
              ""
            )}

            {result.type.name === "ground" ? (
              <div
              key={9}
                className={css`
                  align-items: center;
                  text-align: center;
                  background-color: gray;
                  font-family: fantasy;
                  color: #fff;
                  border-radius: 12px;
                max-width: 2rem;
                  padding: 0.5rem;
                  width: -webkit-fill-available;
                `}
              >
                G
              </div>
            ) : (
              ""
            )}
          </Grid>
        );
      })
    : "";
};
