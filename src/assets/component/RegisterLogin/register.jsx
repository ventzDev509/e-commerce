import { useEffect, useState } from "react";
import registersvg from "../../../assets/media/icons/register.svg";
import Loginsvg from "../../../assets/media/icons/log.svg";
import "./index.css";
import Login from "./login";
import RegisterForm from "./registerF";
import { Link, useLocation } from "react-router-dom";
function RegisterLogin() {
  const locatio = useLocation();
  const path = locatio.pathname;
  //---------------- function bacule login or register page-------------------
  const [login, setLogin] = useState(false);
  const bascule = () => {
    setLogin(true);
  };
  const basculeToRedister = () => {
    setLogin(false);
  };
  let interval
  useEffect(() => {
    interval=setInterval(()=>{
    if (path == "/Form/Login") {
        setLogin(true);
      } else if (path == "/Form/Register") {
        setLogin(false);
      }
   },100)
   return()=> {
    clearInterval(interval)
   }
  });

  return (
    <>
      <div
        className={
          login ? "container-content" : "container-content sign-up-mode"
        }
        id="registerLogin"
      >
        <div className="forms-container">
          <div className="signin-signup">
            {/* ***************Login****************  */}
            <Login login={login} />
            
            {/* ?*************** SIGN IN FORM ********************** */}
            <RegisterForm login={login} />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
             <Link to={"/Form/Register"}>
             <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={basculeToRedister}
                type="submit"
              >
                Sign up
              </button>
             </Link>
            </div>
            <img src={Loginsvg} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <Link to={'/Form/Login'}>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={bascule}
              >
                Sign in
              </button>
              </Link>
            </div>
            <img src={registersvg} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterLogin;
