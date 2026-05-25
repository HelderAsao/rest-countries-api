import type { ThemeContextType } from "./ThemeContext"

const ThemeStyles =(theme:ThemeContextType['theme'])=>{
    const elementStyle = {
        background: theme.colors.elements,
        color: theme.colors.text
    }
    const backgroundStyle = {
        background: theme.colors.background,
        color: theme.colors.text
    }
    return {backgroundStyle, elementStyle}
}
export default ThemeStyles;