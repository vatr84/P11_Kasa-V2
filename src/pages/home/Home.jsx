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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner title="Chez vous, partout et ailleurs" image={homeBanner} />
      <div>
        <Loader />
        <a href="https://vite.dev" target="_blank">

          <Logo />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
