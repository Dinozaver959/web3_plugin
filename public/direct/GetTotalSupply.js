import {GetTotalSupply} from '../local_web3.js';


// get the address from the className
const element = document.getElementById('totalSupply');
const address = element.getAttribute('contract_address');
const network = element.getAttribute('network');
const supply = await GetTotalSupply(address, network);

element.innerHTML = supply; // "balance: " + balance + " ETH";










