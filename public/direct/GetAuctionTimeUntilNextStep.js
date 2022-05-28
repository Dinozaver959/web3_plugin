import {GetTimeUntilNextStep} from '../local_web3.js';


// get the address from the className
const element = document.getElementById('auctionTimeUntilNextStep');
const address = element.getAttribute('contract_address');
const network = element.getAttribute('network');
const timeUntilNextStep = await GetTimeUntilNextStep(address, network);

element.innerHTML = timeUntilNextStep; // "balance: " + balance + " ETH";










