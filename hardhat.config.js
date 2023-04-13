require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.INFURA.URL,
      accounts: [proccess.env.WALLET_PRIVATE_KEY],
    },
  },
};
