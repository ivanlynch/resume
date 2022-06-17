import { createContext, useState } from 'react'

const themes = {
    isLightTheme: true,
    light: {
        text: '',
        foreground: '',
        background: ''
    },
    dark: {
        text: '',
        foreground: '',
        background: ''
    }
}

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState({...themes})

    const toggleTheme = () => {
        setTheme({...theme, isLightTheme: !theme.isLightTheme})
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}