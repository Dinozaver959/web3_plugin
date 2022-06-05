import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plug-n-Play NFT mint buttons by EasyLaunchNFT.com</title>
        <meta name="description" content="Plug-n-Play mint buttons by EasyLaunchNFT.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Plug-n-Play NFT mint buttons by <a href="https://easylaunchnft.com/">EasyLaunchNFT</a>
        </h2>



        {/* 888club.eth specific */}
        <div
          id='balanceDisplay_888Club'
          contract_address='0x9234E442ED4Df8BB53eA2d05311241d8ec522499'
          font_size="24px"
          color="red"
        >
        Balance...
        </div>
        <script async type="module" src="https://web3-plugin.vercel.app/direct/GetETHBalance_888Club.js" ></script>
        {/* <script async type="module" src="./direct/GetETHBalance_888Club.js" ></script>  */}
        <br/>


        {/* GENERAL USAGE */}
        {/* 
          network options
          homestead - Homestead (Mainnet)
          ropsten - Ropsten (proof-of-work testnet)
          rinkeby - Rinkeby (proof-of-authority testnet)
          goerli - Görli (clique testnet)
          kovan - Kovan (proof-of-authority testnet) 
        */}

        <div
          id='totalSupply'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'
        >
        Total Supply ...
        </div>
        {/* <script async type="module" src="https://web3-plugin.vercel.app/direct/GetTotalSupply.js" ></script> */}
        <script async type="module" src="./direct/GetTotalSupply.js" ></script> 
        <br/>


        <div
          id='totalSupplyvsMaxSupply'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'
        >
        Total vs Max Supply ...
        </div>
        {/* <script async type="module" src="https://web3-plugin.vercel.app/direct/GetTotalSupplyvsMaxSupply.js" ></script> */}
        <script async type="module" src="./direct/GetTotalSupplyvsMaxSupply.js" ></script>
        <br/>


        <div
          id='mintButtonPublic_single'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'         
        >
        Public Mint Single (1)
        </div>
        {/* <script async type="module" src="https://web3-plugin.vercel.app/direct/MintPublic_single.js" ></script>  */} 
        <script async type="module" src="./direct/MintPublic_single.js" ></script>
        <br/>


        <div
          id='mintButtonPublic_multiple'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'    
        >
        Public Mint Multiple (x)
        </div>
        <input id='mintButtonPublic_input' type="number" min="0" max="100"
        />
        {/* <script async type="module" src="https://web3-plugin.vercel.app/direct/MintPublic_multiple.js" ></script>  */} 
        <script async type="module" src="./direct/MintPublic_multiple.js" ></script>
        <br/>
        

        

        <div
          id='mintButtonPresale_single'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'     
          collection_name="testdd"
        >
        Presale Mint Single (1)
        </div>
        {/*  <script async type="module" src="https://web3-plugin.vercel.app/direct/MintPresale_single.js" ></script> */} 
        <script async type="module" src="./direct/MintPresale_single.js" ></script>
        <br/>
        

        <div
          id='mintButtonPresale_multiple'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'          
          collection_name="testdd"
        >
        Presale Mint Multiple (x)
        </div>
        <input id='mintButtonPresale_input' type="number" min="0" max="100"
        />
        {/*<script async type="module" src="https://web3-plugin.vercel.app/direct/MintPresale_multiple.js" ></script> */}
         <script async type="module" src="./direct/MintPresale_multiple.js" ></script>  
        <br/>



        <div
          id='auctionPrice'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'
        >
        Auction Price ...
        </div>
        {/*<script async type="module" src="https://web3-plugin.vercel.app/direct/GetAuctionPrice.js" ></script> */}
         <script async type="module" src="./direct/GetAuctionPrice.js" ></script>
        <br/>


        <div
          id='auctionStepSize'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'
        >
        Auction Step Size ...
        </div>
        {/*<script async type="module" src="https://web3-plugin.vercel.app/direct/GetAuctionStepSize.js" ></script> */}
         <script async type="module" src="./direct/GetAuctionStepSize.js" ></script> 
        <br/>


        <div
          id='auctionTimeUntilNextStep'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'
        >
        Auction Time Until Next Step ...
        </div>
        {/*<script async type="module" src="https://web3-plugin.vercel.app/direct/GetAuctionTimeUntilNextStep.js" ></script> */}
         <script async type="module" src="./direct/GetAuctionTimeUntilNextStep.js" ></script> 
        <br/>
        


        <div
          id='mintButtonAuction_single'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'        
        >
        Auction Mint Single (1)
        </div>
        {/*<script async type="module" src="https://web3-plugin.vercel.app/direct/MintAuction_single.js" ></script> */}
          <script async type="module" src="./direct/MintAuction_single.js" ></script>  
        <br/>


        <div
          id='mintButtonAuction_multiple'
          contract_address='0x1E7Ef48664c2CcF2525B349BAA301B2e44D3FD18'
          network='rinkeby'          
        >
        Auction Mint Multiple (x)
        </div>
        <input id='mintButtonAuction_input' type="number" min="0" max="100"
        />
        {/*<script async type="module" src="https://web3-plugin.vercel.app/direct/MintAuction_multiple.js" ></script>  */}
         <script async type="module" src="./direct/MintAuction_multiple.js" ></script> 
        <br/>





        {/* ----------------------------------------------------------------------- */}







      </main>
    </div>
  )
}
