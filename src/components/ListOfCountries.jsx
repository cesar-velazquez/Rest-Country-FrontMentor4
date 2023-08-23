import React from 'react'
import { CountryCard } from './CountryCard'

export const ListOfCountries = ({ country }) => {
  return (
    <section className='cursor-pointer sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10 max-w-7xl sm:m-auto '>
      {
        country.map((country) => <CountryCard key={country.cca2} country={country} />)
      }
    </section>
  )
}
export default ListOfCountries