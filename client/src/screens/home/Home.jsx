import { Link } from "react-router-dom"
import logo from "../../components/assets/images/small-logo.png";

export default function Home () {

  return (
    <div className="home">
      <Link to="/bartenders">
      <img className="small-logo" src={logo} alt="link to bartenders" />
      </Link>
    </div>
  );
};


