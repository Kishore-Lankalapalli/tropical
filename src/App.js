import Header from './components/Header'
import Home from './components/Home'

import TropicalAdventure from './components/TropicalAdventure'
import Destinations from './components/Destinations'
import Discounts from './components/Discounts'
import RegistrationPage from './components/RegistrationPage'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import './App.css'

// Replace your code here
const App = () => (
  <div className="main-container">
    <Header />
    <Home />
    <TropicalAdventure />
    <Destinations />

    <Discounts />
    <RegistrationPage />

    <Testimonials />
    <Footer />
  </div>
)

export default App
