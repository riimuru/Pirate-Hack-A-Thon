import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { useHistory, useLocation } from "react-router-dom";
import { authentication } from "../db/firebase";

const Header = () => {
  const [user, setUser] = useState("")
  const [userUid, setUserUid] = useState("")

  const history = useHistory();
  let location = useLocation();
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  // user authentication listener
  const authListener = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        setUserUid(user.uid)
      } else {
        setUser('')
      }
    })
  }
  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="headerContainer">
      <h1 className="logo" onClick={handleLogoClick}>
        <span className="blackT">P</span>
        <span className="purpleT">i</span>
        <span className="blackT">r</span>
        <span className="purpleT">a</span>
        <span className="blackT">t</span>
        <span className="purpleT">e</span>
        <span>Cloud</span>
      </h1>
      {
        user ? (
          <>
            <div className="mainLinks">
              <Link to="/why-pirate-cloud" className="links">
                Why Pirate Cloud
              </Link>
              <Link to="/solutions" className="links">
                Solutions
              </Link>
              <Link to="/products" className="links">
                Products
              </Link>
              <Link to="/pricing" className="links">
                Pricing
              </Link>
          </div>
          <div className="logLinks">
            <Link to="/dashboard" className="links">
                Logged in as {userUid}
              </Link>
           </div>
        </>

        ) : (
          <>
            <div className="mainLinks">
            <Link to="/why-pirate-cloud" className="links">
              Why Pirate Cloud
            </Link>
            <Link to="/solutions" className="links">
              Solutions
            </Link>
            <Link to="/products" className="links">
              Products
            </Link>
            <Link to="/pricing" className="links">
              Pricing
            </Link>
            </div>

            <div className="logLinks">
              <Link to="/signin" className="signs">
                 Sign in
              </Link>
              <Link to="/register" className="signs signss">
                Get started for free
              </Link>
              </div>
          </>
      

        )

      }
    </div>
  );
};

export default Header;
