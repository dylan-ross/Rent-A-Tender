import { Link } from "react-router-dom";

export default function BarAuth(props) {
  const { currentBartender } = props

  return (
    <>
      <p>{currentBartender.name}</p>
      <Link to="/bartender/jobs">
        Current Jobs
      </Link>
      <Link to="/">
        Log Out
      </Link>
      </>
  )
}