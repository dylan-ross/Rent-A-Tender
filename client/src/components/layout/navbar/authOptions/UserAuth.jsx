import { Link } from "react-router-dom";

export default function UserAuth(props) {
  const { currentUser, handleSignOutUser } = props
  return (
    <>
      <p>{currentUser.username}</p>
      <Link className="link" to="/user/events">
        Upcoming Events
      </Link>
      <Link className="link" to="/" onClick={handleSignOutUser}>
        Log Out
      </Link>
      </>
  )
}