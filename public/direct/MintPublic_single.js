import {MintPublic} from '../local_web3.js';

const element = document.getElementById('mintButtonPublic_single');
element.addEventListener("click", MintPublic_single_);

async function MintPublic_single_(){

    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    await MintPublic(address, network, 1)
    .catch((error) => {
        console.error(error);
        console.log("mint error code: " + error.code);
        console.log("mint error message: " + error.message);
    });
}




