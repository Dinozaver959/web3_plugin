import {MintPresale} from '../local_web3.js';

const element = document.getElementsByClassName('mintButtonPresale_simple')[0];
element.addEventListener("click", MintPresale_);

async function MintPresale_(){

    const address = element.getAttribute('data_address');
    const network = element.getAttribute('network');
    const numtokens = parseInt(element.getAttribute('numtokens'));
    const collectionName = element.getAttribute('collection_name');



    const proof = await fetch(`https://easylaunchnft.com/api/api-getMerkleProof` + '?id=777&collectionName=' + collectionName).then(res => res.json());
    console.log("proof: " + proof);
    if(proof == "" || proof == " "){
      throw ({"message" : "Address is not listed for presale"});
    }




    await MintPresale(address, network, numtokens, proof)
    .catch((error) => {
        console.error(error);
        console.log("mint error code: " + error.code);
        console.log("mint error message: " + error.message);
    });

    //document.getElementsByClassName('mintButtonPublic')[0].innerHTML = supply; // "balance: " + balance + " ETH";
}




