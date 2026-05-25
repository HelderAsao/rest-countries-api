import Nav from "./Nav";
import { Link, useParams } from "react-router-dom";
import {  useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeStyles from "./ThemesStyles";
import useCountry from "./useCountry";

const Country = () => {

    const { name } = useParams();
    const { theme } = useContext(ThemeContext)
    const { backgroundStyle, elementStyle } = ThemeStyles(theme);
    const {country, bordersFullNames} = useCountry(name)



    if (!country) return (
        <div className="min-h-screen flex justify-center items-center">
            <p>Loading...</p>
        </div>
    )

    return (
        <div style={backgroundStyle}>

            <Nav />

            <div className=" px-12 my-8 ">
                <Link to="/" >
                    <button className=" px-4 bg-gray-800 cursor-pointer rounded-md hover:scale-110 transition-transform duration-300 ease-in-out shadow-md"
                        style={elementStyle}>
                        Back
                    </button>
                </Link>
            </div>

            <section className="px-12 w-full ">

                <div className=" mb-4 md:flex md:gap-16 md:items-center ">

                    <div className="mb-4 md:w-1/2">
                        <img src={country.flags.png} alt={country.name.common} className="w-full h-auto object-cover" />

                    </div>

                    <div style={backgroundStyle} className="p-2 flex flex-col gap-6 md:w-1/2">

                        <h2 className="">{country.name.common}</h2>

                        <div className="md:flex gap-6">
                            <div>
                                <p className="hidden md:block">Native name: {country.name.official}</p>
                                <p>Population: {country.population.toLocaleString()}</p>
                                <p>Region: {country.region}</p>
                                <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                            </div>
                            <div>
                                <p>Top Level Domain:{country.tld?.join(', ') || 'N/A'}</p>
                                <p>Currencies: {Object.values(country.currencies)
                                    .map((currency) => currency.symbol)
                                    .join(', ')}
                                </p>
                                <p>Languages: {Object.values(country.languages).join(', ')}</p>
                            </div>
                        </div>

                        <div className="md:flex items-center md:items-start ">
                            <div className="md:mr-1">
                                <p>Border Countries:</p>
                            </div>
                            <div className="flex flex-wrap gap-2 ">
                                {bordersFullNames.length > 0 ? (
                                    bordersFullNames.map((border: string) => (
                                        <button
                                            key={border}
                                            style={elementStyle}
                                            className=" px-4 bg-gray-800 cursor-pointer rounded-md  shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
                                        >
                                            <Link to={`/country/${border}`}>
                                            {border}
                                            </Link>
                                        </button>
                                    ))
                                ) : (
                                    <p>No Border Countries</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Country;