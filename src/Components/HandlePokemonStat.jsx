import React from 'react'
import {  Grid } from "@material-ui/core";
import { css, cx } from "@emotion/css";

export const HandlePokemonStat = (data) => {
    let handleData = data.data
    return handleData.map((result) => {
        let DataStatus = result.base_stat;
        let Dataname = result.stat.name;
        return (
          <Grid
            item
            xs={12}
            s={6}
            key={Dataname}
            md={12}
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              background-color: #ffbf5e;
              border-radius: 12px;
              padding: 0rem 2rem;
              margin-bottom:0.5rem !important;
              font-family: fantasy;
              font-weight: 300;
            `}
          >
            <h3
             className={css`
            text-transform : uppercase ;
            font-weight: 300;
           `}
            >{Dataname}</h3>
            
            {DataStatus <= 60 ?     <h3  className={css`
              color: red;
              font-family: fantasy;
              font-weight: 300;
           `}>{DataStatus}</h3>:    <h3 
           className={css`
           color: green;
           font-family: fantasy;
           font-weight: 300;
        `}
           >{DataStatus}</h3>}

          </Grid>
        );
      });
}
