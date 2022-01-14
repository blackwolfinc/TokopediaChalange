import React, { Component ,createContext } from 'react'

export const DataContextComponents = createContext();



 class DataContext extends Component {
     state={
         tes: false ,
         tes2: true ,
     }
    render() {
        return (
            <DataContextComponents.Provider value={{...this.state}}>
                {this.props.children}
            </DataContextComponents.Provider>
        )
    }
}
