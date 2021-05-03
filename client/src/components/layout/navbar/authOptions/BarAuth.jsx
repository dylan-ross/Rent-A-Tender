import { Link } from "react-router-dom";

export default function BarAuth(props) {
  const { currentBartender,handleSignOutBartender} = props

  return (
    <>
      <p>{currentBartender.name}</p>
      <Link to="/bartender/jobs">
        Current Jobs
      </Link>
      <Link to="/" onClick={handleSignOutBartender}>
        Log Out
      </Link>
      </>
  )
}