import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
//import viteLogo from '/logo.svg'
import Logo from '../../components/Logo'
import './Home.scss'
import homeBanner from '../../assets/home-banner.jpg'
import Banner from '../../components/banner/Banner'
import Loader from '../../components/loader/Loader'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import accommodationsData from '../../data/logements.json'
import Gallery from '../../components/gallery/Gallery'
import { useFetchData } from '../../hooks/useFetchData'

function App() {
  const { isLoading, data } = useFetchData(accommodationsData)

  return (
    <>
      <main className="content container">
        <Banner title="Chez vous, partout et ailleurs" image={homeBanner} />
        <section className="logements">
          <h2 className="sr-only">Liste de logements</h2>
          {isLoading ? (
            <Loader />
          ) : !data ? (
            <div>Pas de données disponibles</div>
          ) : (
            <Gallery accommodations={data} />
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
