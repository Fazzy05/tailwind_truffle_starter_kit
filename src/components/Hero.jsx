import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'
import banner1 from '../assets/banner1.png'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-5xl font-bold">
            Create,Sell &<br /> Collect Your Own <br />
            <span className="text-gradient">Creative NFTs</span>
          </h1>
          <p className="text-gray-200 text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur,<br />adipisicing elit. Ipsum vero omnis repellendus mollitia.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="text-white cursor-pointer p-2" id='b4-btn'
            onClick={onCreatedNFT}
          >
            Create NFT
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-white font-bold">0</p>
            <small className="text-gray-300">User</small>
          </div>
          <div>
            <p className="text-white font-bold">0</p>
            <small className="text-gray-300">Artwork</small>
          </div>
          <div>
            <p className="text-white font-bold">0</p>
            <small className="text-gray-300">Artist</small>
          </div>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
          src={banner1}
          alt="banner1"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
    
  )
}

export default Hero
