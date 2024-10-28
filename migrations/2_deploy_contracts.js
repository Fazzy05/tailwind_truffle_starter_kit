const MyToken = artifacts.require('MyToken')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(MyToken, 'My Token', 'TNT', 10, accounts[1])
}
