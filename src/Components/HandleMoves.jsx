import React from 'react'
import { Container, Grid, Paper } from "@material-ui/core";
import { css, cx } from "@emotion/css";


export const HandleMoves = (data) => {
    let handleData = data.data
    return handleData.map((result) => {
        // let DataStatus = result.base_stat;
        let Dataname = result.move.name;
        return (
          <Grid
            item
            xs={12}
            s={6}
            md={3}
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              background-color: #fff;
              border: 1px solid #ffbf5e ;
                margin: 1rem !important;
              border-radius: 12px;
              font-family: fantasy;
              font-weight: 100 !IMPORTANT
              padding: 0rem 1rem ; 
              text-align: center ;
              text-transform: uppercase;
            `}
          >
              <p 
              className={css`
          width: 100% ;
          font-weight: 100 !IMPORTANT;
            `}
              >{Dataname}</p>
            {/* <h3>{Dataname}</h3>
            <h3>{DataStatus}</h3> */}
          </Grid>
        );
      });
}
