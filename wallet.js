const { ethers } = require("ethers");
const wallet = ethers.Wallet.createRandom();
console.log(wallet.address); // public key
console.log(wallet.privateKey); // private key
