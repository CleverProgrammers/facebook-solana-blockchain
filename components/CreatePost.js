import React, { useState } from 'react'
import Image from 'next/image'
import { BsFileImageFill, BsFillCameraVideoFill } from 'react-icons/bs'
import { FiRefreshCw } from 'react-icons/fi'
import 'react-simple-hook-modal/dist/styles.css'

const CreatePost = ({ savePost, getAllPosts, name, url }) => {
  const [input, setInput] = useState('')

  const style = {
    wrapper: `w-[100%] flex mt-[1rem] flex-col rounded-[0.6rem] bg-[#252526] p-2 pt-4 pb-0 shadow-[0px 5px 7px -7px rgba(0, 0, 0, 0.75)]`,
    formContainer: `flex pb-3 mb-2 border-b border-[#404041]`,
    profileImage: `rounded-full object-cover`,
    form: `flex-1 flex items-center`,
    input: `flex-1 py-[0.6rem] px-[1rem] mx-[0.6rem] rounded-full bg-[#3a3b3d] outline-none border-none text-white`,
    hiddenSubmit: `invisible`,
    actionsContainer: `flex justify-evenly pb-2`,
    actionButton: `flex flex-1 items-center justify-center p-2 text-[#555] cursor-pointer hover:bg-[#404041] rounded-[0.5rem] transition-all duration-300 ease-in-out`,
    actionButtonTitle: `font-semibold ml-[0.6rem] text-lg text-[#afb3b8]`,
    videoCamIcon: `text-red-500`,
    photoIcon: `text-green-500`,
    refreshIcon: `text-blue-500`,
    spinner: `h-full w-full flex justify-center items-center`,
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setInput('')

    await savePost(input)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.formContainer}>
        <Image
          src={url}
          alt='profile image'
          className={style.profileImage}
          height={40}
          width={40}
        />
        <form className={style.form}>
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            className={style.input}
            placeholder={`What's on your mind, ${name}?`}
          />

          <button
            className={style.hiddenSubmit}
            type='submit'
            onClick={handleSubmit}
          />
        </form>
      </div>

      <div className={style.actionsContainer}>
        <div className={style.actionButton}>
          <BsFillCameraVideoFill className={style.videoCamIcon} />
          <div className={style.actionButtonTitle}>Live Video</div>
        </div>
        <div className={style.actionButton}>
          <BsFileImageFill className={style.photoIcon} />
          <div className={style.actionButtonTitle}>Photo/Video</div>
        </div>
        <div className={style.actionButton} onClick={() => getAllPosts()}>
          <FiRefreshCw className={style.refreshIcon} />
          <div className={style.actionButtonTitle}>Refresh Posts</div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
