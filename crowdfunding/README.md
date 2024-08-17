# CrowdFunding 3.0

## Project Setup
###  FrontEnd

```
cd crowdfunding
npm i
npm run dev
```

### BackEnd

#### Start the Local Hardhat node

```
cd contract 
npx hardhat node
```

#### Contract Deployment

```
cd contract
npx hardhat run ./scripts/deploy.js --network localhost
```