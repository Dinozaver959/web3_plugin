import {MintPublic} from '../local_web3.js';

const elememt = document.getElementsByClassName('mintButtonPublic')[0];
const element_number = document.getElementsByClassName('mintButton_number')[0];

elememt.addEventListener("click", MintPublic_);

async function MintPublic_(){
    
    const address = elememt.getAttribute('data_address');
    const network = elememt.getAttribute('network');
    const numtokens = element_number.value;

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




