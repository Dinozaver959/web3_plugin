import {GetAuctionStepSize} from '../local_web3.js';


// get the address from the className
const element = document.getElementsByClassName('auctionStepSize')[0];
const address = element.getAttribute('contract_address');
const network = element.getAttribute('network');
const step = await GetAuctionStepSize(address, network);

element.innerHTML = step; // "balance: " + balance + " ETH";










