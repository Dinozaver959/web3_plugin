import {GetAuctionStepSize} from '../local_web3.js';


// get the address from the className
const element = document.getElementById('auctionStepSize');
const address = element.getAttribute('contract_address');
const network = element.getAttribute('network');
const step = await GetAuctionStepSize(address, network);

element.innerHTML = step; // "balance: " + balance + " ETH";










