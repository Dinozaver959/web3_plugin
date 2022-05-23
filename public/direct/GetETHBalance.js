import {GetETHBalance, GetETHBalance_} from '../local_web3.js';


// directly
//GetETHBalance();


// get the address from the className
const address = document.getElementsByClassName('mintButton')[0].getAttribute('data_address');
const balance = await GetETHBalance_(address);

document.getElementsByClassName('mintButton')[0].innerHTML = balance; // "balance: " + balance + " ETH";










