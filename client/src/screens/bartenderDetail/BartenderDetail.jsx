import { useEffect, useState } from "react";
import "./BartenderDetail.css";
import { useHistory, useParams, Link } from "react-router-dom";
import { getOneBartender } from "../../services/bartenders";

const BartenderDetail = (props) => {
  const [bartenderItem, setBartenderItem] = useState(null);
  const { id } = useParams();
  const { currentUser } = props;

  useEffect(() => {
    const fetchBartender = async () => {
      const bartenderData = await getOneBartender(id);
      setBartenderItem(bartenderData);
    };
    fetchBartender();
  }, []);

  return (
    <div className="bartender-detail">
      <div className="bartender-detail-card">
        <img
          className="bartender-detail-image"
          src={bartenderItem?.img_url}
          alt={bartenderItem?.name}
        />
        <div className="bartender-detail-text">
          <h3 className="bartender-detail-name">{bartenderItem?.name}</h3>
          <h3 className="bartender-category">{bartenderItem?.category}</h3>
          <p className="bartender-bio">{bartenderItem?.bio}</p>
          <p className="bartender-skills">{bartenderItem?.skills}</p>
          <h3 className="bartender-detail-price">{bartenderItem?.rate}</h3>
        </div>
      </div>
      <div className="detail-buttons">
        <Link to={`/users/${currentUser?.id}/jobs/new`}><button>Book</button></Link>
        <Link><button>Back</button></Link>
      </div>
    </div>
  );
};

export default BartenderDetail;
