import React from 'react'

export const CountryCard = ({ country }) => {
    const capitals = country.capital?.join(', ')
    return (
        <article className='cursor-pointer hover:scale-105  bg-white darkTheme dark:shadow-[#06060c] shadow-2xl rounded-none overflow-hidden'>
            <header>
                <img src={country.flags.svg} alt="" />
            </header>
            <section className='p-2 py-4'>
                <h3 className='font-bold mb-2 text-lg'>{country.name.common}</h3>
                <ul>
                    <li><span>Population:</span> {country.population} </li>
                    <li><span>Region: </span> {country.region} </li>
                    <li className='line-clamp-1'><span>Capital:</span>  {capitals ?? "Nones"}</li>
                </ul>
            </section>
        </article>
    )
}
export default CountryCard
