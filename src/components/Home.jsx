import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ListOfCountries } from './ListOfCountries';

export const Home = () => {
    const [country, setCountry] = useState([])
    const [countryName, setCountryName] = useState("");
    const [region, setRegion] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const countryByName = country.filter((country) => country.name.common.toLowerCase().includes(countryName.toLowerCase()))

    const countryByRegion = countryByName.filter((country) => country.region.includes(region))

    const handleChangeCountryName = (e) => {
        setCountryName(e.target.value)
    }

    const handleChangeRegion = (e) => {
        setRegion(e.target.value)
    }


    useEffect(() => {
        const URL = "https://restcountries.com/v3.1/all";
        axios.get(URL)
            .then(({ data }) => setCountry(data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <main className='p-4 py-6'>

            <form onSubmit={handleSubmit} className='darkTheme duration-1000  grid gap-1 '>
                <div className='darkTheme duration-1000 p-2 rounded-md flex gap-3 items-center '>
                    <i className='bx bx-search-alt-2 text-dark-gray text-lg'></i>
                    <input value={countryName} id='countryName' className='shadow-xl darkTheme dark:shadow-lg dark:shadow-[#2a2a53] duration-1000 outline-none flex-1' type="text" placeholder='search' onChange={handleChangeCountryName} />
                </div>

                <select onChange={handleChangeRegion} className='dark:shadow-lg dark:shadow-[#2a2a53] darkTheme outline-none ligthTheme p-4 rounded-md max-w-[120px]'>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
            <ListOfCountries country={countryByRegion} />
        </main>


    )
}
