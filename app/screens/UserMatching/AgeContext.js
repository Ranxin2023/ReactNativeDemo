import React, { createContext, useState, useContext } from "react"
const AgeContext=createContext()
export const AgeProvider=({children})=>{
    const [age, setAge]=useState(20)
    return (
        <AgeContext.Provider value={{age, setAge}}>
            {children}
        </AgeContext.Provider>
    )
}

export const useAge=()=>{
    useContext(AgeContext)
}