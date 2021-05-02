import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Bartenders.css";
import Search from "../../components/search/Search";
// import { bartenders, currentUser } from "../../services/bartenders";

const Bartenders = (props) => {
  const [queriedBartenders, setQueriedBartenders] = useState([]);
  const { bartenders } = props;

  const handleSearch = (event) => {
    const newQueriedBartenders = bartenders.filter((bartender) =>
      bartender.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedBartenders(newQueriedBartenders);
  };

  if (!bartenders) {
    return (
      <>
        <h3>No bartenders</h3>
      </>
    );
  }

  const bartendersJSX = queriedBartenders.map((bartender, index) => (
    <React.Fragment key={index}>
      <Link className="bartender" to={`/bartenders/${bartender.id}`}>
        <img
          className="bartender-image"
          src={bartender.img_url}
          alt={bartender.name}
          width="20%"
        />
        <h3 className="bartender-name">{bartender.name}</h3>
      </Link>
    </React.Fragment>
  ));

  const handleSubmit = (event) => event.preventDefault();

  return (
    <div className="bartender-screen-container">
      <div className="header">
        <h3 className="bartenders-title">Bartenders</h3>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
      </div>
      <div>{bartendersJSX}</div>
    </div>
  );
};

export default Bartenders;
