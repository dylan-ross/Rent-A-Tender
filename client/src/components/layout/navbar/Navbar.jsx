import "./Navbar.css";
import { Link } from "react-router-dom";
import BarAuth from "../navbar/authOptions/BarAuth";
import UnAuth from "../navbar/authOptions/UnAuth";
import UserAuth from "../navbar/authOptions/UserAuth";
import logo from "../../assets/images/logo.png";

export default function Navbar(props) {
  
  const {
    currentBartender,
    currentUser,
    handleSignOutBartender,
    handleSignOutUser,
  } = props;

  return (
    <div className="nav">
      <Link className="logo" to="/">
        <img src={logo} alt="Rent-A-Tender" width="50%" />
      </Link>
      <Link to="/bartenders">
        <p>Bartenders</p>
      </Link>
      {currentUser && (
        <UserAuth
          currentUser={currentUser}
          handleSignOutUser={handleSignOutUser}
        />
      )}

      {currentBartender && (
        <BarAuth
          currentBartender={currentBartender}
          handleSignOutBartender={handleSignOutBartender}
        />
      )}
      {!currentBartender && !currentUser && <UnAuth />}
    </div>
  );
}
