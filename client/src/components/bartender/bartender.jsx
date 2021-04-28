import './Bartender.css';
import { Link } from "react-router-dom";
import { bartenders } from '../../services/bartenders';

const Bartender = (props) => {
  const { bartenders } = props
  console.log(bartenders)
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