import { Link } from "react-router-dom";

export default function UnAuth () {
  return (
    <>
      <Link to="/bartender_signin">
        Bartend
      </Link>
      <Link to="/user_signin">
        Sign In
      </Link>
      <Link to="/user_signup">
        Join
      </Link>
      </>
  )
}