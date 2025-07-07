import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import profile_picture from "./assets/Naveen.png";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Simulate fetching user data
    setUser({
      id: 1,
      username: "billa_2k05",
      full_name: "billa",
      bio: "Passionate about coding, design, and photography.",
      profile_picture: profile_picture,
      followers: 120,
      following: 150,
      posts_count: 34,
    });

    // Simulate fetching posts data
    setPosts([
      { id: 1, image: "https://picsum.photos/300/300?random=1" },
      { id: 2, image: "https://picsum.photos/300/300?random=2" },
      { id: 3, image: "https://picsum.photos/300/300?random=3" },
    ]);
  }, []);

  if (!user) return <h2>Loading profile...</h2>;

  return (
    <>
      <Sidebar />
      <div className="profile-page">
        <div className="profile-cont">
          <div className="profile-header">
            <img
              className="profile-pics"
              src={user.profile_picture}
              alt="Profile"
            />

            <div className="profile-info">
              <h2>{user.username}</h2>
              <button className="edit-btn">Edit Profile</button>

              <div className="profile-stats">
                <span>
                  <b>{user.posts_count}</b> posts
                </span>
                <span>
                  <b>{user.followers}</b> followers
                </span>
                <span>
                  <b>{user.following}</b> following
                </span>
              </div>

              <div className="profile-bio">
                <b>{user.full_name}</b>
                <p>{user.bio}</p>
              </div>
            </div>
          </div>

          <div className="profile-posts">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <img src={post.image} alt="Post" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
