# CrowdFunding 3.0
CrowdFunding 3.0 is a web3.0 platform built using ReactJs, Rainbowkit, Wagmi, Solidity and Hardhat.
It is a platform which allows users to create Campaigns and donate to the Campaigns created by others using cryptocurrency

## Setup Guide
#### Cloning the repository
```bash
git clone https://github.com/mahangareomkar/Crowd-Funding-3.0
```

#### Entering the project Directory
```bash
cd Crowd-Funding-3.0/
```

#### Setting up .env
```bash
cd ./crowdfunding
```
```
ALCHEMY_ID = <YOUR_ALCHEMY_ID>
PROJECT_ID = <YOUR_WALLETCONNECT_PROJECT_ID>
```

#### Installing Packges
- Contract
  ```
  cd contract/
  npm i
  ```
- Front-End
  ```
  cd crowdfunding/
  npm i
  ```


#### Running Project
- Contract
  ```bash
  cd contract/
  ```
    - Run the Hardhat Node
    ```bash
    npx hardhat node --hostname localhost
    ```
    - Deploy the Contract
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

- Front-End
    - Copy the abi and Contract Address and place it in *'crowdfunding/src/constants/contractAbi.js'*
    - Run the Frontend
  ```
  cd crowdfunding/
  npm run dev
  ```