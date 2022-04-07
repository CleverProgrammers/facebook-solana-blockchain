import { useEffect } from 'react'
import Image from 'next/image'
import Contact from './Contact'

const RightSidebar = ({ getUsers, users }) => {
  const style = {
    wrapper: `w-[24rem] text-lg text-white`,
    title: `text-[#afb3b8] font-semibold`,
    adsContainer: ``,
    ad: `flex items-center my-3 mr-[1rem] p-2 rounded-lg`,
    adImageContainer: `h-full w-[50%] flex items-center mr-[0.5rem]`,
    adImage: `object-cover`,
    adLink: `text-[#b0b3b8] text-sm`,
    divider: `w-[95%] border-b border-[0.5px] border-[#3e4042] my-2`,
    contact: `flex items-center my-2`,
    contactImage: `rounded-full object-cover`,
    contactName: `ml-4 text-[1rem]`,
  }

  useEffect(() => {
    ;(async () => {
      await getUsers()
    })()
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Sponsored</div>
      <div className={style.adsContainer}>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={
                'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/HpzVcovxQz28Br7GkRyq_15289248_269068140162594_1580546814749307408_o_1_.png'
              }
              height={100}
              width={100}
              className={style.adImage}
              alt='cp logo'
            />
            ˚
          </div>
          <div>
            <div>The #1 Channel for Blockchain Development</div>
            <div className={style.adLink}>cleverprogrammer.com</div>
          </div>
        </div>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={
                'https://www.cityam.com/wp-content/uploads/2021/08/Solana-1.jpg'
              }
              height={100}
              width={100}
              className={style.adImage}
              alt='solana logo'
            />
          </div>
          <div>
            <div>Powerful for developers. Fast for everyone.</div>
            <div className={style.adLink}>solana.com</div>
          </div>
        </div>
        <div className={style.divider} />
        <div className={style.title}>Contacts</div>
        <div className={style.contactsContainer}>
          {users.map(user => {
            return <Contact key={user.walletAddress} user={user} />
          })}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
