import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Stories = () => {
  const navigate = useNavigate();
  const [stories, setstories] = useState(null);
  const [total, setTotalStories] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setstories(data);
        setTotalStories(data.length);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  if (!stories) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <div className="fullstories">
        {stories.map((post) => (
          <div className="stories" key={post.id}>
            <div className="storypiccontainer">
              <img
                src={post.profile_picture}
                className="storypic"
                onClick={() => {
                  navigate("/viewstory/" + post.id + "/" + total);
                }}
              />
            </div>
            <div className="storyusername">
              <p>{post.username}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
