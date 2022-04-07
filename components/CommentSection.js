import Comment from './Comment'
import CreateComment from './CreateComment'

const CommentSection = ({
  comments,
  createCommentForPost,
  name,
  url,
}) => {
  const style = {
    wrapper: `w-full rounded-b-lg p-[5px] flex justify-center-center flex-col border-t border-gray-300 border-[#3a3b3e] pt-4`,
  }

  return (
    <div className={style.wrapper}>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      <CreateComment
        createCommentForPost={createCommentForPost}
        name={name}
        url={url}
      />
    </div>
  )
}

export default CommentSection
