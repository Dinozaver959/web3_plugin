import {MintPresale} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonPresale_single')[0];
element.addEventListener("click", MintPresale_single_);

async function MintPresale_single_(){

    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    const collectionName = element.getAttribute('collection_name');

    await MintPresale(address, network, 1, collectionName)
    .catch((error) => {
        console.error(error);
        console.log("mint error code: " + error.code);
        console.log("mint error message: " + error.message);
    });

    //document.getElementsByClassName('mintButtonPublic')[0].innerHTML = supply; // "balance: " + balance + " ETH";
}




