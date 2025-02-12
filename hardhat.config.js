require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    arbitrum: {
      url: 'https://arbitrum-rinkeby.infura.io/v3/461c3cf0cb1b472e9612cb7b059c2be1',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
