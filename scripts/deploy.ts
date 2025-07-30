import { ethers } from 'hardhat';

async function main() {
   const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  // Specify multi-sig admin
  const multiSigAdmin = deployer.address;


  const Counter = await ethers.getContractFactory('Counter');
  const counter = await Counter.deploy(multiSigAdmin);
  await counter.waitForDeployment();
  // Get the generated contract address from the transaction receipt, don't use `await counter.getAddress()`
  const receipt = await ethers.provider.getTransactionReceipt(counter.deploymentTransaction()?.hash!);
  console.log('Counter is deployed to:', receipt?.contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });