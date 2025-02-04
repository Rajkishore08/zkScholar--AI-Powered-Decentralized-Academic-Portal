const hre = require('hardhat');

async function main() {
  const SoulboundNFT = await hre.ethers.getContractFactory('SoulboundNFT');
  const soulboundNFT = await SoulboundNFT.deploy();
  await soulboundNFT.deployed();
  console.log('SoulboundNFT deployed to:', soulboundNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
