export const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Campaigns",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "target",
                "type": "int256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountCollected",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "image",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "_target",
                "type": "int256"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_image",
                "type": "string"
            }
        ],
        "name": "createCampaign",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCampaigns",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "target",
                        "type": "int256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountCollected",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "image",
                        "type": "string"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "donatorAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "donatedAmount",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct CrowdFunding.Transaction[]",
                        "name": "donations",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct CrowdFunding.Campaign[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getTransactions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "donatorAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "donatedAmount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct CrowdFunding.Transaction[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "numberOfCampaigns",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

// "abi": [
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "Campaigns",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "id",
//           "type": "uint256"
//         },
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "string",
//           "name": "title",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         },
//         {
//           "internalType": "int256",
//           "name": "target",
//           "type": "int256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "deadline",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amountCollected",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "image",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_title",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_description",
//           "type": "string"
//         },
//         {
//           "internalType": "int256",
//           "name": "_target",
//           "type": "int256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_deadline",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "_image",
//           "type": "string"
//         }
//       ],
//       "name": "createCampaign",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_id",
//           "type": "uint256"
//         }
//       ],
//       "name": "donate",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "getCampaigns",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "uint256",
//               "name": "id",
//               "type": "uint256"
//             },
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//             },
//             {
//               "internalType": "string",
//               "name": "title",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "description",
//               "type": "string"
//             },
//             {
//               "internalType": "int256",
//               "name": "target",
//               "type": "int256"
//             },
//             {
//               "internalType": "uint256",
//               "name": "deadline",
//               "type": "uint256"
//             },
//             {
//               "internalType": "uint256",
//               "name": "amountCollected",
//               "type": "uint256"
//             },
//             {
//               "internalType": "string",
//               "name": "image",
//               "type": "string"
//             },
//             {
//               "components": [
//                 {
//                   "internalType": "address",
//                   "name": "donatorAddress",
//                   "type": "address"
//                 },
//                 {
//                   "internalType": "uint256",
//                   "name": "donatedAmount",
//                   "type": "uint256"
//                 }
//               ],
//               "internalType": "struct CrowdFunding.Transaction[]",
//               "name": "donations",
//               "type": "tuple[]"
//             }
//           ],
//           "internalType": "struct CrowdFunding.Campaign[]",
//           "name": "",
//           "type": "tuple[]"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_id",
//           "type": "uint256"
//         }
//       ],
//       "name": "getTransactions",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "address",
//               "name": "donatorAddress",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "donatedAmount",
//               "type": "uint256"
//             }
//           ],
//           "internalType": "struct CrowdFunding.Transaction[]",
//           "name": "",
//           "type": "tuple[]"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "numberOfCampaigns",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ]