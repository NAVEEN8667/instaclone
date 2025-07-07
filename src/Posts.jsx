import { useState, useEffect } from "react";
import React from "react";

const Posts = () => {
  const [posts, setposts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setposts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  if (!posts) {
    return <h1>loading</h1>;
  }

  return (
    <>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img
              src={post.profile_picture}
              alt={post.username}
              className="profile-pic"
            />
            <span className="postusername">{post.username}</span>
            <span className="posttimestamp"> . {post.timestamp}</span>
            <span className="threedots">
              <i className="bi bi-three-dots"></i>
            </span>
          </div>
          <img src={post.image_url} alt="post" className="post-image" />

          <div className="postactivities">
            <i className="bi bi-heart-fill"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
          <p>{post.likes} Likes</p>
          <p>{post.caption}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
