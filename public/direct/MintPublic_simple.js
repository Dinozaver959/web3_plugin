import {MintPublic} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonPublic_simple')[0];
element.addEventListener("click", MintPublic_simple_);

async function MintPublic_simple_(){

    const address = element.getAttribute('data_address');
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




