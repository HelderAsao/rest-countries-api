import { useState, createContext } from "react"

export const Themes = {

    light: {
        name: 'light',
        colors: {
            background: '#f5f5f5',
            elements: '#ffffff',
            text: '#2b3945',
        },
        buttonLabel:'Dark Mode'
    },
    dark: {
        name: 'dark',
        colors: {
            background: '#202c37',
            elements: '#2b3945',
            text: '#ffffff'
        },
        buttonLabel:'Light Mode'
    }

}

export type ThemeContextType = {
    theme: {
        name: string;   
        colors: {
            background: string;
            elements: string;
            text: string;
        };
        buttonLabel: string;
    };
    toggleTheme: () => void;
}

type ChildrenProps = {
    children: React.ReactNode;
}

export const ThemeContext = createContext({}as ThemeContextType)

export const ThemeProvider = ({ children }: ChildrenProps) => {

    const [theme, setTheme] = useState(Themes.dark)

    const toggleTheme = () => {
        setTheme(theme.name === 'dark' ? Themes.light : Themes.dark)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}






