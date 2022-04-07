import { useState } from 'react'
import Image from 'next/image'
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { BsDisplay } from 'react-icons/bs'
import { RiGroup2Line } from 'react-icons/ri'
import { SiFacebookgaming } from 'react-icons/si'
import solanaLogo from '../assets/sol.png'
import useWalletBalance from '../context/useWalletBalance'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
require('@solana/wallet-adapter-react-ui/styles.css')

const Header = ({ name, url }) => {
  const [balance] = useWalletBalance()

  const style = {
    wrapper: `flex items-center w-full h-[4rem] justify-around px-[1rem] py-[0.2rem] sticky top-0 bg-[#252526] shadow-[0px 5px 8px -9px rgba(0, 0, 0, 0.75)] z-20`,
    headerLeft: `flex justify-center gap-[0.6rem]`,
    facebookLogo: `items-center flex object-contain`,
    searchContainer: `flex items-center bg-[#3a3b3d] max-w-[18rem] rounded-full py-2 px-2 text-[#b0b3b8]`,
    searchInput: `border-none px-[0.6rem] bg-transparent outline-none w-[18rem] text-white placeholder:text-[#b0b3b8]`,
    headerCenterContainer: `flex-1 flex items-center justify-center h-full`,
    headerCenterWrapper: `flex justify-center h-full py-2`,
    centerNavIconContainer: `flex items-center px-[1.8rem] cursor-pointer duration-[0.5s]  hover:bg-[#555657] rounded-[10px]`,
    centerNavIcon: `text-2xl text-[#666]`,
    headerRight: `flex h-min`,
    headerRightButton: `flex items-center px-3 mx-2 rounded-[0.2rem] cursor-pointer`,
    userInfo: `bg-[#31e3bd] hover:bg-[#438791]`,
    userName: `font-bold ml-2 text-black`,
    userImage: `rounded-full object-cover`,
    balanceContainer: `bg-[#ec55bc] hover:bg-[#572079] text-black`,
    balanceIcon: `object-covers`,
    balanceText: `text-white font-bold ml-2`,
  }
  return (
    <div className={style.wrapper}>
      <div className={style.headerLeft}>
        <Image
          className={style.facebookLogo}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt=''
          height={30}
          width={30}
        />
        <div className={style.searchContainer}>
          <AiOutlineSearch />
          <input
            type='text'
            className={style.searchInput}
            placeholder='Search Facebook'
          />
        </div>
      </div>
      <div className={style.headerCenterContainer}>
        <div className={style.headerCenterWrapper}>
          <div className={style.centerNavIconContainer}>
            <AiFillHome className={style.centerNavIcon} />
          </div>
          <div className={style.centerNavIconContainer}>
            <BsDisplay className={style.centerNavIcon} />
          </div>
          <div className={style.centerNavIconContainer}>
            <RiGroup2Line className={style.centerNavIcon} />
          </div>
          <div className={style.centerNavIconContainer}>
            <SiFacebookgaming className={style.centerNavIcon} />
          </div>
        </div>
      </div>
      <div className={style.headerRight}>
        {name && (
          <div className={`${style.userInfo} ${style.headerRightButton}`}>
            <Image
              src={url}
              height={20}
              width={20}
              className={style.userImage}
              alt='user image'
            />
            <div className={style.userName}>{name}</div>
          </div>
        )}
        <WalletMultiButton />
        <div className={`${style.balanceContainer} ${style.headerRightButton}`}>
          <Image
            className={style.balanceIcon}
            src={solanaLogo}
            height={20}
            width={20}
            alt='solana logo'
          />
          <div className={style.balanceText}>{balance.toFixed(2)} SOL</div>
        </div>
      </div>
    </div>
  )
}

export default Header
