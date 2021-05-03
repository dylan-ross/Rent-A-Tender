import { Link } from "react-router-dom";

export default function UserAuth(props) {
  const { currentUser, handleSignOutUser } = props
  return (
    <>
      <p>{currentUser.username}</p>
      <Link to="/user/events">
        Upcoming Events
      </Link>
      <Link to="/" onClick={handleSignOutUser}>
        Log Out
      </Link>
      </>
  )
}