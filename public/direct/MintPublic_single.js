import {MintPublic} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonPublic_single')[0];
element.addEventListener("click", MintPublic_single_);

async function MintPublic_single_(){

    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    const numtokens = parseInt(element.getAttribute('numtokens'));
    await MintPublic(address, network, numtokens)
    .catch((error) => {
        console.error(error);
        console.log("mint error code: " + error.code);
        console.log("mint error message: " + error.message);
    });

    //document.getElementsByClassName('mintButtonPublic')[0].innerHTML = supply; // "balance: " + balance + " ETH";
}




