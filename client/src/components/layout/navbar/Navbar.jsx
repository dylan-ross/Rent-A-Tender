import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export default function Navbar(props) {
  const params = useParams()
  const { id } = params
  // console.log(params)
  const {
    currentBartender,
    currentUser,
    handleSignOutBartender,
    handleSignOutUser,
  } = props;
  // console.log(props);

  // console.log(handleSignOutBartender)
  // console.log(handleSignOutUser)
  // console.log(currentBartender)
  // console.log(currentUser)
  return (
    <div className="nav">
      <Link className="logo" to="/">
        <img src={logo} alt="Rent-A-Tender" width="50%" />
      </Link>
      {currentUser ? (
        <div className="current-user-nav">
          <p>{currentUser.username}</p>
          <Link to={`/user/jobs`}>Upcoming Events</Link>
          <button onClick={handleSignOutUser}>Logout</button>
        </div>
      ) : (
        <div className="user-signin-signup">
          <Link to="/bartender_signin">Bartend</Link>
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
      {/* {currentUser && (
        <div>
          <Link to="/user/jobs">Upcoming Events</Link>
        </div>
      )} */}
    </div>
  );
}
