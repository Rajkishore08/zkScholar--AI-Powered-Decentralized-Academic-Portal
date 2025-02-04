require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    arbitrum: {
      url: 'https://arbitrum-rinkeby.infura.io/v3/YOUR_INFURA_KEY',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
