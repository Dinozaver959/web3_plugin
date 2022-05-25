
import { ethers } from "./ethers-5.6.esm.min.js";


// ------------------------------------------------------------------------------- //
//                    API style functions for 3rd party websites
// ------------------------------------------------------------------------------- //


export async function GetETHBalance(address) {

  // const balance = await provider.getBalance("address");

  //const network = 'rinkeby' // use rinkeby testnet
  const network = 'homestead';
  //const provider = ethers.getDefaultProvider(network)             // rate limited - works on 1/min   - otherwise use Etherscan
  const provider = new ethers.providers.EtherscanProvider(network, "4P25TGYM4CBH6AKZAUK98ZEXKH9RAYHCKC");  // free service, rate limit 5/s
                                                                  // https://ethereum.stackexchange.com/questions/108031/what-is-the-difference-between-ethers-getdefaultprovider-and-providers-ethersc
                                                                  // new ethers.providers.EtherscanProvider()                                                            
  var balanceInEth;

  await provider.getBalance(address).then((balance) => {
    // convert a currency unit from wei to ether
    balanceInEth = ethers.utils.formatEther(balance)
    //console.log(`balance: ${balanceInEth} ETH`)
  })

  console.log(balanceInEth);
  return balanceInEth;
}


async function InitializeSmartContract_online(address, network){

  //const network = 'homestead';
  const provider = new ethers.providers.EtherscanProvider(network, "4P25TGYM4CBH6AKZAUK98ZEXKH9RAYHCKC");

  // read ABI
  const filePath = "./ABI/abi_24052022.txt";
  let ABI = getFileContent(filePath, false);

  // initialize with contract
  const contract = new ethers.Contract(address, ABI, provider);
  return contract;
}


export async function GetTotalSupply(address, network){

  // initialize contract 
  const contract = await InitializeSmartContract_online(address, network);

  const totalSupply = await contract.totalSupply();
  console.log("totalSupply: " + totalSupply);

  return totalSupply;
}


export async function GetTotalSupplyvsMaxSupply(address, network){

  // initialize contract 
  const contract = await InitializeSmartContract_online(address, network);

  const totalSupply = await contract.totalSupply();
  console.log("totalSupply: " + totalSupply);

  const maxSupply = await contract.MAX_SUPPLY();
  console.log("maxSupply: " + maxSupply);
  
  const ret = totalSupply + " / " + maxSupply;
  return ret;
}

export async function MintPublic(address, network, numTokens){
  
  await HandleNetworkSwitch(network); 

  //const network = 'homestead';
  //const provider = new ethers.providers.EtherscanProvider(network, "4P25TGYM4CBH6AKZAUK98ZEXKH9RAYHCKC");

  // read ABI
  const filePath = "./ABI/abi_24052022.txt";
  let ABI = getFileContent(filePath, false);


  // works with wallet (metamask provider)
  const provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
  );
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  // initialize with contract
  const contract = await InitializeSmartContract_online(address, network);


  if(contract){

    // get the mint price directly from the contract
    const mintPrice = await contract.MINT_PRICE_PUBLIC();

    console.log("mint price: " + mintPrice);    
    console.log("numTokens: " + numTokens);
    let price = ethers.BigNumber.from(mintPrice).mul(numTokens);

    const tx = await contract.connect(signer).publicSaleMint(numTokens, {
      value: price,
    });
    await tx.wait();
    console.log("minted public: " + numTokens);


    /*
    await provider.sendTransaction ("eth_requestAccounts", []).catch((error)=>{

      console.log("deploy error code: " + error.code);
      console.log("deploy error message: " + error.message);
      
      //action to perform when user clicks "reject"
      console.log('error occured - user denied Tx')
      //document.getElementById('submitFeedback').style.display = 'inline';
      //document.getElementById('submitFeedback').innerText = 'User denied transaction';
      return false;
    });
    */

    /*
    .send(parameters, function (err, mintPrice) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("mint Tx sent. Tx hash: ", mintPrice)
    })
    .on('receipt', function (receipt) {
      console.log("Transacation has been included on the blockchain");
    })
    .on('error', function (error, receipt) {
      console.log("error: " + error);
    });
    */
  }
  
}


export async function MintPresale(address, network, numTokens, proof){
  await HandleNetworkSwitch(network); 

  // read ABI
  const filePath = "./ABI/abi_24052022.txt";
  let ABI = getFileContent(filePath, false);

  // works with wallet (metamask provider)
  const provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
  );
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  // initialize with contract
  const contract = await InitializeSmartContract_online(address, network);

  if(contract){

    // get the mint price directly from the contract
    const mintPrice = await contract.MINT_PRICE_ALLOWLIST();

    console.log("mint price: " + mintPrice);    
    console.log("numTokens: " + numTokens);
    let price = ethers.BigNumber.from(mintPrice).mul(numTokens);

    const tx = await contract.connect(signer).mintAllowList(numTokens, {
      value: price,
      proof: proof,
    });
    await tx.wait();
    console.log("minted presale: " + numTokens);
  }
}



// ------------------------------------------------------------------------------- //
//                                 Helper Functions
// ------------------------------------------------------------------------------- //

function getFileContent(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}

async function HandleNetworkSwitch(networkName) {

  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");

    if (window.ethereum.networkVersion !== ConvertNetworkNameToChainID(networkName)) {

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: "0x" + (ConvertNetworkNameToChainID(networkName)).toString(16) }]
        });

      } catch (err) {
          // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                ...networks[networkName]
              }]
          });
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

function ConvertNetworkNameToChainID(networkName){

  switch (networkName) {
    case "homestead":
      return 1;

    case "ropsten":
      return 3;

    case "rinkeby":
      return 4;

    case "goerli":
      return 5;

    case "kovan":
      return 42;

    case "polygon":
      return 137;

    case "mumbai":
      return 80001;

    case "bsc":
      return 56;

    case "bsct":
      return 97;
  
    default:
      break;
  }
}

const networks = {

  homestead: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://api.mycryptoapi.com/eth/"],
    blockExplorerUrls: ["https://etherscan.io/"]
  },
  ropsten: {
    chainId: `0x${Number(3).toString(16)}`,
    chainName: "Test Network Ropsten",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://ropsten.infura.io/v3/"],
    blockExplorerUrls: ["https://ropsten.etherscan.io/"]
  },
  rinkeby: {
    chainId: `0x${Number(4).toString(16)}`,
    chainName: "Test Network Rinkeby",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://rinkeby.infura.io/v3/"],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/"]
  },
  goerli: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: "Test Network Goerli",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://goerli.infura.io/v3/"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"]
  },
  kovan: {
    chainId: `0x${Number(42).toString(16)}`,
    chainName: "Test Network Kovan",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://kovan.infura.io/v3/"],
    blockExplorerUrls: ["https://kovan.etherscan.io/"]
  },
  bsct: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com/"]
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  polygon_Mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org"
    ],
    blockExplorerUrls: ["https://bscscan.com"]
  }
};