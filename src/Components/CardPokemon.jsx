import React, { useState } from 'react'

export const CardPokemon = (data) => {
    



    return (
        <div>
              {console.log("state",data)}

            {data.map(x => 
                console.log(x)
                )}
        </div>
    )
}
