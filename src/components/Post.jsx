"use client";
import { useState } from "react";

import { faComment, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Comments from "./comments.jsx";
import DeletePost from "./DeletePost.jsx";
import EditPost from "./EditPost.jsx";
import LikePost from "./LikePost.jsx";

export default function Post({ post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  return (
    <div className="post-containers">
      <div>
        {isEditing ? (
          <EditPost
            post={post}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        ) : (
          <span> {post.text}</span>
        )}
      </div>
      <div className="post-buttons-containers">
        <LikePost post={post} />
        <button onClick={() => setIsCommenting(true)}>
          <FontAwesomeIcon icon={faComment} />
        </button>
        <DeletePost post={post} />
        <button onClick={() => setIsEditing(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      <div>
        {" "}
        <Comments
          post={post}
          isCommenting={isCommenting}
          setIsCommenting={setIsCommenting}
        />
      </div>
    </div>
  );
}
