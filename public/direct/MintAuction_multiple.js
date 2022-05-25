import {MintAuction} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonAuction_multiple')[0];
const element_input = document.getElementsByClassName('mintButtonAuction_input')[0];

element.addEventListener("click", MintAuction_multiple_);

async function MintAuction_multiple_(){
    
    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    const numtokens = element_input.value;

    if(numtokens > 0){
        await MintAuction(address, network, numtokens)
        .catch((error) => {
            console.error(error);
            console.log("mint error code: " + error.code);
            console.log("mint error message: " + error.message);
          });
    }
}




