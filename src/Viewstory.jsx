import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import instaLogo from "./assets/toppng.com-hd-instagram-logo-text-white-free-png-5000x2167.png";
import { useNavigate } from "react-router-dom";
import App from "./App";
const Viewstory = () => {
  const navigate = useNavigate();
  const { id, total } = useParams();
  const [stories, setstories] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/stories/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setstories(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
    if (id > total) {
      navigate("/");
    }
  }, [id, total, navigate]);

  if (!stories) {
    return <h1>loading</h1>;
  }

  if (id <= 0) {
    return <App />;
  }
  return (
    <>
      <div className="viewstory">
        <div>
          <img src={instaLogo} className="insta-viewstory" alt="instagram" />
        </div>

        {id > 1 && (
          <Link to={`/viewstory/${Number(id) - 1}/${total}`}>
            <i class="bi bi-arrow-left-circle-fill"></i>
          </Link>
        )}

        <div>
          <img src={stories.story_image} className="viewstory-img" />
        </div>
        <Link to={`/viewstory/${Number(id) + 1}/${total}`}>
          <i class="bi bi-arrow-right-circle-fill"></i>
        </Link>
      </div>
    </>
  );
};

export default Viewstory;
