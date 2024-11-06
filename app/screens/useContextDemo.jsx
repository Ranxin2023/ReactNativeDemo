import React,  {createContext, useState}from 'react'
const ThemeContext=createContext()

export function ThemeProvider({children}){
    const [theme, setTheme]=useState('light')
    const toggleTheme=()=>{
        setTheme((prevTheme)=>{prevTheme==='light'?'dark':'light'})
    }
    return (
        <ThemeContext.ThemeProvider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.ThemeProvider>
    )
}

export default ThemeContext