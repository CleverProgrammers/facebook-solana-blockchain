import { useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { createContext, useContext, useEffect, useState } from 'react'
import * as anchor from '@project-serum/anchor'
import { SOLANA_HOST } from '../utils/const'

const BalanceContext = createContext(null)

const connection = new anchor.web3.Connection(SOLANA_HOST)

export default function useWalletBalance() {
  const [balance, setBalance] = useContext(BalanceContext)
  return [balance, setBalance]
}

export const WalletBalanceProvider = ({ children }) => {
  const wallet = useWallet()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    ;(async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
    })()
  }, [wallet, connection])

  return (
    <BalanceContext.Provider value={[balance, setBalance]}>
      {children}
    </BalanceContext.Provider>
  )
}
