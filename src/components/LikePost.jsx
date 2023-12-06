"use client";
import { useRouter } from 'next/navigation.js';

import { API } from '@/lib/api';

export default function LikePost({ post }) {
  //   const [likes, setLikes] = useState(0);
  const router = useRouter();

  async function addLike() {
    const response = await fetch(`${API}/api/posts/${post.id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    const info = await response.json();
    router.refresh();

    console.log(info);
  }

  return (
    <div>
      <p id="thumb" onClick={addLike}>
        {post.likes}👍🏾
      </p>
    </div>
  );
}
