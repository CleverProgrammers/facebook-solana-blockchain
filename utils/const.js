import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import facebook_clone from './facebook_clone.json'

export const CLUSTER =
  process.env.REACT_APP_CLUSTER === 'mainnet'
    ? 'mainnet'
    : process.env.REACT_APP_CLUSTER === 'testnet'
    ? 'testnet'
    : 'devnet'

export const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL
  ? process.env.REACT_APP_SOLANA_API_URL
  : CLUSTER === 'mainnet'
  ? clusterApiUrl('mainnet-beta')
  : CLUSTER === 'testnet'
  ? clusterApiUrl('devnet')
  : 'https://api.devnet.solana.com'

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  '6b5cvMWLE1LwRzzv4dtiz1w5yHTnpbt3A2s3UtbvZkWt',
)

export const STABLE_POOL_IDL = facebook_clone
