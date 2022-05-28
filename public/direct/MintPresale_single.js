import {MintPresale} from '../local_web3.js';

const element = document.getElementById('mintButtonPresale_single');
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
}




