require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || ""

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
      localhost: {
        url: "http://127.0.0.1:8545"
      },
      sepolia: {
        url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        accounts: privateKeys.split(",")
      }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY
    }
  }
};
