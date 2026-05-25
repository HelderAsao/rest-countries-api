import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import ThemeStyles from "./ThemesStyles";




const Nav =()=>{
    const {theme,toggleTheme} = useContext(ThemeContext)
    const{elementStyle} = ThemeStyles(theme)

    return(
        <div>
            <nav className="flex justify-between py-8 px-6  "
            style={elementStyle}>
                <p className="">Where in the world?</p>
                <button className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out" onClick={toggleTheme}>
                    {theme.buttonLabel}
                </button>
            </nav>
        </div>
    )
}

export default Nav;