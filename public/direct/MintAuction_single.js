import {MintAuction} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonAuction_single')[0];
element.addEventListener("click", MintAuction_single_);

async function MintAuction_single_(){

    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    const numtokens = parseInt(element.getAttribute('numtokens'));
    await MintAuction(address, network, numtokens)
    .catch((error) => {
        console.error(error);
        console.log("mint error code: " + error.code);
        console.log("mint error message: " + error.message);
    });

    //document.getElementsByClassName('mintButtonPublic')[0].innerHTML = supply; // "balance: " + balance + " ETH";
}




