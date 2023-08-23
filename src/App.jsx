import './App.css'
import { Home } from './components/Home'
// import { ListOfCountries } from './components/ListOfCountries'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <section className='darkTheme duration-75' >
      <NavBar />
      <Home />
    </section>
  )
}

export default App
