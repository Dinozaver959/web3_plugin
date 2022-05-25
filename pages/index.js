import Head from 'next/head'
import Script from "next/script"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>



        {/* 888club.eth specific */}
        <div
          className='balanceDisplay'
          data_address='0x9234E442ED4Df8BB53eA2d05311241d8ec522499'
        >
        Balance ...
        </div>
        <script async type="module" src="./direct/GetETHBalance.js"></script>
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
          className='totalSupply'
          contract_address='0xef6d703aac43436375d313dc5ffc6e2bb06a468b'
          network='rinkeby'
        >
        Total Supply ...
        </div>
        <script async type="module" src="./direct/GetTotalSupply.js"></script>
        <br/>


        <div
          className='totalSupplyvsMaxSupply'
          contract_address='0xef6d703aac43436375d313dc5ffc6e2bb06a468b'
          network='rinkeby'
        >
        Total vs Max Supply ...
        </div>
        <script async type="module" src="./direct/GetTotalSupplyvsMaxSupply.js"></script>
        <br/>


        <div
          className='mintButtonPublic_simple'
          data_address='0xef6d703aac43436375d313dc5ffc6e2bb06a468b'
          network='rinkeby'     
          numtokens='1'       
        >
        Public Mint Simple (1)
        </div>
        <script async type="module" src="./direct/MintPublic_simple.js"></script> 
        <br/>


        <div
          className='mintButtonPublic'
          data_address='0xef6d703aac43436375d313dc5ffc6e2bb06a468b'
          network='rinkeby'    
        >
        Public Mint Advance
        </div>
        <input 
          className='mintButton_number'
          type="number" 
          min="0" 
          max="100"
        />
        <script async type="module" src="./direct/MintPublic.js"></script> 
        <br/>
        

        

        <div
          className='mintButtonPresale_simple'
          data_address='0xef6d703aac43436375d313dc5ffc6e2bb06a468b'
          network='rinkeby'     
          numtokens='1'       
          collection_name="testdddd"
        >
        Presale Mint Simple (1)
        </div>
        <script async type="module" src="./direct/MintPresale_simple.js"></script> 
        <br/>
        

      </main>
    </div>
  )
}
