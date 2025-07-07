//npx json-server --watch db/suggestions.json --port 3001 --static ./data
import { useState, useEffect } from "react";
function Suggestions() {
  const [suggestions, setsuggestions] = useState(null);
  const [profile, setprofile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/suggestions")
      .then((response) => {
        return response.json();
      })
      .then((data) => setsuggestions(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => {
        return response.json();
      })
      .then((data) => setprofile(data))
      .catch((error) => console.log(error));
  }, []);

  if (!suggestions) {
    return <h1>loading</h1>;
  }
  if (!profile) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <div className="suggestions">
        <div className="suggestprofile" key={profile.id}>
          <div className="profileinfo">
            <div>
              <img src={profile.profile_picture} className="profilepic" />
            </div>
            <div className="profile-desc">
              <p>
                <strong>{profile.username}</strong>
              </p>
              <p className="profname">{profile.full_name}</p>
            </div>
          </div>
          <div className="switch">
            <p>switch</p>
          </div>
        </div>
        <div className="suggesttitles">
          <h3 className="suggestheader">Suggested for you</h3>
          <p className="seeall">See all</p>
        </div>
        <div className="suggestionscards">
          {suggestions.map((suggest) => (
            <div className="allsuggestions" key={suggest.id}>
              <div className="suggestmain">
                <img
                  src={suggest.profile_picture}
                  className="suggestionimage"
                />
                <div className="suggestionusername">
                  <p>{suggest.username}</p>
                  <p>{suggest.mutual_followers} followers</p>
                </div>
              </div>

              <div className="switch">
                <p>Follow</p>
              </div>
            </div>
          ))}
        </div>
        <div className="suggestfooter">
          <p>
            About Help Press API Jobs Privacy Terms Locations Language Meta
            <br></br>
            Verified © 2025 Instagram from Meta
          </p>
        </div>
      </div>
    </>
  );
}
export default Suggestions;
