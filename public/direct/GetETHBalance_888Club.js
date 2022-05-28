import {GetETHBalance} from '../local_web3.js';


// get the address from the className
const element = document.getElementById('balanceDisplay_888Club');
const address = element.getAttribute('contract_address');
const balance = await GetETHBalance(address);

// 7.0001 -> 7

const color = element.getAttribute('color');
const fontSize = element.getAttribute('font_size');
const styleString = '"' + 'color:' + color + '; font-size:' + fontSize + '"';
element.innerHTML = '<p style=' + styleString + '> ' + balance.split(".")[0] + ' </p>';



// "balance: " + balance + " ETH";










