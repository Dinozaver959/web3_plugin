import {MintAuction} from '../local_web3.js';

const element = document.getElementById('mintButtonAuction_single');
element.addEventListener("click", MintAuction_single_);

async function MintAuction_single_(){

    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    await MintAuction(address, network, 1)
    .catch((error) => {
        console.error(error);
        console.log("mint error code: " + error.code);
        console.log("mint error message: " + error.message);
    });
}




