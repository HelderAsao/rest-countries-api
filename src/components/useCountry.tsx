import { useState, useEffect } from "react";
import type { Country as CountryType } from '../types/Country';

const useCountry = (name: string | undefined) => {
    const [country, setCountry] = useState<CountryType | null>(null);
    const [bordersFullNames, setBordersFullNames] = useState<string[]>([])
    const codes = country?.borders?.join(',')

        useEffect(() => {
            async function getCountry() {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                    const data = await response.json();
                    setCountry(data[0]);
                } catch (error) {
                    console.error('Error fetching country data:', error);
                }
            }
            getCountry()
    
        }, [name])
    
        useEffect(() => {
    
            if (!codes) return;
    
            async function getFullNamesBorders() {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
                    const data = await response.json();
                    setBordersFullNames(data.map((item: CountryType) => item.name.common))
                } catch (error) {
                    console.error('Error fetching border countries:', error);
                }
            }
            getFullNamesBorders()
        }, [codes])

        return{
            country,
            bordersFullNames
        }
}

export default useCountry;