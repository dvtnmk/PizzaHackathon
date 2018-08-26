
// Initializing
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
}

// Get default address
web3.eth.defaultAccount = web3.eth.accounts[0];

// TODO: Replace your SimpleContract abi here
var abi = [
 {
  "constant": false,
  "inputs": [
   {
    "name": "token",
    "type": "uint256"
   }
  ],
  "name": "buyToken",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_name",
    "type": "string"
   },
   {
    "name": "_price",
    "type": "uint256"
   },
   {
    "name": "_total",
    "type": "uint256"
   },
   {
    "name": "_place",
    "type": "string"
   },
   {
    "name": "_province",
    "type": "string"
   },
   {
    "name": "_country",
    "type": "string"
   }
  ],
  "name": "setProduct",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "name": "_id",
    "type": "uint256"
   }
  ],
  "name": "getProductById",
  "outputs": [
   {
    "name": "",
    "type": "uint256"
   },
   {
    "name": "",
    "type": "address"
   },
   {
    "name": "",
    "type": "string"
   },
   {
    "name": "",
    "type": "uint256"
   },
   {
    "name": "",
    "type": "uint256"
   },
   {
    "name": "",
    "type": "string"
   },
   {
    "name": "",
    "type": "string"
   },
   {
    "name": "",
    "type": "string"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "name": "_address",
    "type": "address"
   }
  ],
  "name": "getToken",
  "outputs": [
   {
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "name": "name",
    "type": "string"
   }
  ],
  "name": "getAllProduct",
  "outputs": [
   {
    "name": "",
    "type": "uint256[]"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_price",
    "type": "uint256"
   }
  ],
  "name": "setPriceToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "name": "",
    "type": "address"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_productId",
    "type": "uint256"
   }
  ],
  "name": "OrderMatching",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "newOwner",
    "type": "address"
   }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "name": "productId",
    "type": "uint256"
   }
  ],
  "name": "OrderComplete",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "name": "buyer",
    "type": "address"
   }
  ],
  "name": "buyTokenComplete",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
   },
   {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
   }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
 }
];
// TODO: Replace your SimpleContract contract address here
var contractAddress = '0x4cecaa54a5e4be3a8e3891c9d12bc750c8152846';

// Create an interface to SimpleContract on TomoChain
var SimpleContractContract = web3.eth.contract(abi);
var SimpleContract = SimpleContractContract.at(contractAddress);

console.log('web3',  web3);
console.log('SimpleContract sub', SimpleContract);


// Get Balance on the first load
//getBalance();
