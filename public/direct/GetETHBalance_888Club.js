import {GetETHBalance} from '../local_web3.js';


// get the address from the className
const address = document.getElementsByClassName('balanceDisplay_888Club')[0].getAttribute('contract_address');
const balance = await GetETHBalance(address);

document.getElementsByClassName('balanceDisplay_888Club')[0].innerHTML = balance; // "balance: " + balance + " ETH";










