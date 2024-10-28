import logo from '../assets/logo.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={logo}
          alt="NFT Marketplace"
          style={{ width: 200, height: 80 }}
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-3 cursor-pointer">Collection</li>
        <li className="mx-3 cursor-pointer">Features</li>
        <li className="mx-3 cursor-pointer">FAQ</li>
      </ul>

      {connectedAccount ? (
        <button
          className="text-white cursor-pointer" id='b4-btn'
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="text-white cursor-pointer" id='b4-btn'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
