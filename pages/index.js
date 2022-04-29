import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3Contract } from "react-moralis"
import { abi } from "../constants/abi"

export default function Home() {

  const { runContractFunction } = useWeb3Contract(
    {
      abi: abi,
      contractAdd: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      functionName: "store",
      params: {
        _favoriteNumber: 778,
      },
    }
  )
  
  return (
    <div className={styles.container}>
      <h1>HELLO FROM INDEX</h1>
      <button onClick={() => runContractFunction()}>Store 778</button>
    </div>
  )
}
