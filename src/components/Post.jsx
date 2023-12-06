import DeletePost from './DeletePost.jsx';
import LikePost from './LikePost.jsx';

export default function Post({ post }) {
  return (
    <div className="post-containers">
      {post.text}
      <div className="post-buttons-containers">
        <DeletePost post={post} />
        <LikePost post={post}/>
      </div>
    </div>
  );
}