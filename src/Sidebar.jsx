import instalogo from "./assets/toppng.com-hd-instagram-logo-text-white-free-png-5000x2167.png";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="topcontent">
            <img src={instalogo} className="instagramname" />
            <ul className="sidebarlist">
              <li onClick={() => navigate("/")}>
                <i className="bi bi-house"></i>Home
              </li>
              <li>
                <i className="bi bi-search"></i>Search
              </li>
              <li>
                <i className="bi bi-compass"></i>Explore
              </li>
              <li>
                <i className="bi bi-film"></i>Reels
              </li>
              <li>
                <i className="bi bi-messenger"></i>Messages
              </li>
              <li>
                <i className="bi bi-heart-fill"></i>Notifications
              </li>
              <li>
                <i className="bi bi-plus-square"></i>Create
              </li>
              <li onClick={() => navigate("/profile")}>
                <i className="bi bi-person-circle"></i>Profile
              </li>
            </ul>
          </div>
          <div className="bottomcontent">
            <ul className="sidebarlist2">
              <li>
                <i className="bi bi-list"></i>More
              </li>
              <li>
                <i className="bi bi-threads"></i>From threads
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
