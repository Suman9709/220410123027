import React, { useEffect, useState } from "react";
// import { fetchPosts } from "../Api/Api.js";
import Post from './Post'

const Trending = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const loadTrendingPosts = async () => {
      const posts = await fetchPosts();

      const commentCounts = {};
      comments.forEach((comment) => {
        commentCounts[comment.postId] = (commentCounts[comment.postId] || 0) + 1;
      });

      let maxComments = Math.max(...Object.values(commentCounts));

      const trending = posts
        .filter((post) => commentCounts[post.id] === maxComments)
        .map((post) => ({
          ...post,
          commentCount: commentCounts[post.id] || 0,
        }));

      setTrendingPosts(trending);
    };

    loadTrendingPosts();
  }, []);

  return (
    <div>
      {/* <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} commentCount={post.commentCount} />
      ))} */}
    </div>
  );
};

export default Trending;
