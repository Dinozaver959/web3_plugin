import {MintPresale} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonPresale_multiple')[0];
const element_input = document.getElementsByClassName('mintButtonPresale_input')[0];
element.addEventListener("click", MintPresale_multiple_);

async function MintPresale_multiple_(){
    
    const address = element.getAttribute('contract_address');
    const network = element.getAttribute('network');
    const numtokens = element_input.value;
    const collectionName = element.getAttribute('collection_name');

    if(numtokens > 0){
        await MintPresale(address, network, numtokens, collectionName)
        .catch((error) => {
            console.error(error);
            console.log("mint error code: " + error.code);
            console.log("mint error message: " + error.message);
          });
    }
}




