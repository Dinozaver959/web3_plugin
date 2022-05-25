import {GetAuctionPrice} from '../local_web3.js';


// get the address from the className
const element = document.getElementsByClassName('auctionPrice')[0];
const address = element.getAttribute('contract_address');
const network = element.getAttribute('network');
const price = await GetAuctionPrice(address, network);

element.innerHTML = price; // "balance: " + balance + " ETH";










