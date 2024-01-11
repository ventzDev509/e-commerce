import "./css/header.css";
import user from "../../media/produit/user.jpg";
import { Link } from "react-router-dom";
import img from "../../media/profile/user.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
function Header() {
  const [firstname, setFirstName] = useState("");
  const [profile, setProfile] = useState("");
  const getinfosUser = async () => {
    await axios
      .get("http://localhost:3000/api/user-info", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setFirstName(response.data.userInfos.firstName);
        setProfile(response.data.userInfos.profile);
      });
  };
  useEffect(() => {
    getinfosUser();
  }, []);
  return (
    <>
      <header>
        <nav>
          <div className="info">
            <p>Hey!</p>
            <p>
              Let's search your Still{" "}
              <small
                style={{
                  textTransform: "uppercase",
                  fontSize: "22px",
                  fontWeight: "900",
                  color: "black",
                }}
              >
                {firstname && firstname}
              </small>
            </p>
          </div>
          <div className="menu">
            <div className="itemL">
              <li className="lien">Home</li>
              <div className="border_ active"></div>
            </div>
            <li className="lien">Order</li>
            <li className="lien">Favoriews</li>
          </div>
          {firstname && profile ? (
            <>
              <Link to={"/dashbord/home"}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/Form/Register"}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
              </Link>
            </>
          )}
        </nav>
        <div className="search">
          <span className="las la-search"></span>
          <input type="text" placeholder="Search your daily Grocery food ..." />
        </div>
      </header>
    </>
  );
}

export default Header;
