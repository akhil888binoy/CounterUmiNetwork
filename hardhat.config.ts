import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  defaultNetwork: "devnet",
  networks: {
    devnet: {
      url: "https://devnet.uminetwork.com/evm",
      accounts: [process.env.PRIVATE_KEY!]
    },
    // base :{
    //   url: "https://sepolia.base.org",
    //   accounts: [ process.env.PRIVATE_KEY!]
    // }
  }
};

export default config;