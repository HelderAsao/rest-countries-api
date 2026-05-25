import { useEffect, useState, useContext } from 'react';
import IconSearch from '../assets/images/icon-search.svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import type { Country } from '../types/Country';
import ThemeStyles from './ThemesStyles';

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [countries, setCountries] = useState<Country[]>([]);
    const [region, setRegion] = useState('')
    const { theme } = useContext(ThemeContext)
    const { backgroundStyle, elementStyle } = ThemeStyles(theme);

    const optionsSelect = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
    ]


    useEffect(() => {

        const getCountriesByRegion = async () => {
            try{
                if (!region) return;
                
                const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
                const data = await response.json();
                
                setCountries(data)
            }catch(error){
                console.error('Error fetching countries by region:', error);
            }
        }
        getCountriesByRegion()

    }, [region])

    const filteredCountries = countries.filter((country) =>
        country.name.common
            .toLowerCase()
            .includes(inputValue.toLowerCase())
    )


    return (
        <div className='min-h-screen'
            style={backgroundStyle}
        >

            <Nav />

            {/* escondido */}

            <div className='flex flex-col md:flex-row md:justify-between md:items-center w-full px-8 mb-8 mt-8'>

                <div className='relative flex w-full md:w-1/3'>
                    <img src={IconSearch} alt="Search" className='absolute px-2 top-1/2 -translate-y-1/2 ' />

                    <input type="text" placeholder="Search for a country..." className="shadow rounded-md p-2 pl-10 w-full "
                        value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        style={elementStyle} />


                </div>

                <div className=' rounded-md p-2 w-40 mt-6 md:mt-0'
                    style={elementStyle}>

                    <select name="region" id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        style={elementStyle}>


                        <option value="" disabled hidden>Filter By Region</option>
                        {optionsSelect.map((option) => (
                            <option key={option}
                                value={option}>
                                {option}
                            </option>
                        ))}

                    </select>
                </div>
            </div>

            <section className='px-12  '>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 '>
                    {filteredCountries.map((country) => (



                        <div key={country.name.common} className='rounded-md overflow-hidden w-full max-w-[280px] hover:scale-105 transition-transform duration-300 ease-in-out'>

                            <div className='cursor-pointer'>
                                <Link to={`/country/${country.name.common}`}>
                                    <img src={country.flags.png} alt={country.name.common} className='h-40 w-full object-cover' />
                                </Link>
                            </div>

                            <div style={elementStyle}
                                className=' p-2 '>

                                <h3 className='font-bold mb-2'>{country.name.common}</h3>
                                <p >Population: {country.population.toLocaleString()}</p>
                                <p>Region: {country.region}</p>
                                <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>

                            </div>
                        </div>


                    )
                    )}

                </div>


            </section>

        </div>
    )
}

export default Home;