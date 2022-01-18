import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { css, cx } from "@emotion/css";

export const HandleTypes = (data) => {
  let hendleData = data.data;
  return data
    ? hendleData.map((result) => {
        return (
          <Grid xs={2}>
            {/* {result.type.name} */}
            {result.type.name === "fire" ? (
              <div
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
