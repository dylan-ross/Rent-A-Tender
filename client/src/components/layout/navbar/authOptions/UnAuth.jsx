import { Link } from "react-router-dom";

export default function UnAuth () {
  return (
    <>
      <Link className="link" to="/bartender_signin">
        Bartend
      </Link>
      <Link className="link" to="/user_signin">
        Sign In
      </Link>
      <Link className="link" to="/user_signup">
        Join
      </Link>
      </>
  )
}