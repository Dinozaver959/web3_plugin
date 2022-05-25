import {MintPublic} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonPublic_multiple')[0];
const element_input = document.getElementsByClassName('mintButtonPublic_input')[0];

element.addEventListener("click", MintPublic_multiple_);

async function MintPublic_multiple_(){
    
    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    const numtokens = element_input.value;

    if(numtokens > 0){
        await MintPublic(address, network, numtokens)
        .catch((error) => {
            console.error(error);
            console.log("mint error code: " + error.code);
            console.log("mint error message: " + error.message);
          });
    }

    //document.getElementsByClassName('mintButtonPublic')[0].innerHTML = supply; // "balance: " + balance + " ETH";
}




