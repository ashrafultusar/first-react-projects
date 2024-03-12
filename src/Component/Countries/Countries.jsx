import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
},[])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
        const newVisitedCountry = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountry)
    }
    
    
    return (
        <div>
            <h2>Countries: {countries.length}</h2>

            <div>
                <h4>Visited Country :</h4>
                <ul>

                </ul>
           </div>


            <div className="country-container">
                
            {
                    countries.map(country => <Country key={country.cca2}
                    handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)

            }

           </div>

        </div>
    );
};

export default Countries;