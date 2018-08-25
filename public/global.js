
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
    "name": "_firstName",
    "type": "string"
   },
   {
    "name": "_lastName",
    "type": "string"
   }
  ],
  "name": "createMember",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
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
  "constant": false,
  "inputs": [
   {
    "name": "token",
    "type": "uint256"
   }
  ],
  "name": "setToken",
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
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "listProductId",
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
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "members",
  "outputs": [
   {
    "name": "firstName",
    "type": "string"
   },
   {
    "name": "lastName",
    "type": "string"
   },
   {
    "name": "current",
    "type": "address"
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
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "memberToOwner",
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
  "constant": true,
  "inputs": [
   {
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "products",
  "outputs": [
   {
    "name": "id",
    "type": "uint256"
   },
   {
    "name": "owner",
    "type": "address"
   },
   {
    "name": "name",
    "type": "string"
   },
   {
    "name": "price",
    "type": "uint256"
   },
   {
    "name": "total",
    "type": "uint256"
   },
   {
    "name": "place",
    "type": "string"
   },
   {
    "name": "province",
    "type": "string"
   },
   {
    "name": "country",
    "type": "string"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 }
];
// TODO: Replace your SimpleContract contract address here
var contractAddress = '0xca9989760f65d18a774fc2c0118fd17edc029075';

// Create an interface to SimpleContract on TomoChain
var SimpleContractContract = web3.eth.contract(abi);
var SimpleContract = SimpleContractContract.at(contractAddress);

// Get Balance on the first load
//getBalance();
