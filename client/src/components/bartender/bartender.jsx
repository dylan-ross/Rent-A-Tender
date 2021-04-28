import './Bartender.css';
import { Link } from "react-router-dom";

const Bartender = (props) => {
  return (
    <>
      <Link className="bartender" to={`/bartenders/${props._id}`}>
        <img className="bartender-image" src={props.img_url} alt={props.name} />
        <h3 className="bartender-name">{props.name}</h3>
      </Link>
    </>
  );
};

export default Bartender;