import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import CreateNFT from './components/CreateNFT'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import ShowNFT from './components/ShowNFT'
import Transactions from './components/Transactions'
import UpdateNFT from './components/UpdateNFT'
import FAQ from './components/FAQ'
import { AboutUs } from './components/AboutUs'

const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <Artworks />
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <topCreator />
      <FAQ />
      <Footer />
      <Alert />
      <Loading />
      
    </div>
  )
}

export default App
