import {GetTotalSupplyvsMaxSupply} from '../local_web3.js';


// get the address from the className
const element = document.getElementsByClassName('totalSupplyvsMaxSupply')[0];
const address = element.getAttribute('contract_address');
const network = element.getAttribute('network');
const supply = await GetTotalSupplyvsMaxSupply(address, network);

element.innerHTML = supply; // "balance: " + balance + " ETH";










