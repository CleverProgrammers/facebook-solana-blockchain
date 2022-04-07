import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { WalletBalanceProvider } from '../context/useWalletBalance'
import { ModalProvider } from 'react-simple-hook-modal'

const WalletConnectionProvider = dynamic(
  () => import('../context/WalletConnectionProvider'),
  {
    ssr: false,
  },
)

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  )
}

export default MyApp
