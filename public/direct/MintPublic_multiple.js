import {MintPublic} from '../local_web3.js';

const element = document.getElementById('mintButtonPublic_multiple');
const element_input = document.getElementById('mintButtonPublic_input');

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
}




