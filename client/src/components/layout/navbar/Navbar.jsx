import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export default function Navbar(props) {
  const {
    currentBartender,
    currentUser,
    handleSignOutBartender,
    handleSignOutUser,
  } = props;
  console.log(props);

  // console.log(handleSignOutBartender)
  // console.log(handleSignOutUser)
  // console.log(currentBartender)
  // console.log(currentUser)
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Rent-A-Tender" width="20%" />
      </Link>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleSignOutUser}>Logout</button>
        </div>
      ) : (
        <div className="user-signin-signup">
          <Link to="/user_signin">Sign In</Link>
          <Link to="/user_signup">Join</Link>
        </div>
      )}

      {currentBartender ? (
        <>
          <p>{currentBartender.name}</p>
          <button onClick={handleSignOutBartender}>Logout</button>
        </>
      ) : (
        <Link to="/bartender_signin">Bartend</Link>
      )}
      {currentUser && (
        <>
          <Link to="/foods">Upcoming Events</Link>
          <Link to="/flavors">Flavors</Link>
        </>
      )}
    </div>
  );
}
