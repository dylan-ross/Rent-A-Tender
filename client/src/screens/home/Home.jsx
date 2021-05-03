import { Link } from "react-router-dom"
import logo from "../../components/assets/images/small-logo.png";

export default function Home () {

  return (
    <div className="home">
      <Link className="small-logo" to="/bartenders">
      <img src={logo} alt="link to bartenders" />
      </Link>
    </div>
  );
};


