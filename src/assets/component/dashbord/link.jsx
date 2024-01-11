import { Link } from "react-router-dom";

function LinkM() {
  return (
    <>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand"></li>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/dashbord/home'}>Dashbord</Link>
          </li>
          <li>
            <Link to={"/dashbord/edite-profile"}>Edit Profile</Link>
          </li>
          <li>
            <Link>Panier</Link>
          </li>
          <li>
            <Link>deconnexion</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LinkM;
