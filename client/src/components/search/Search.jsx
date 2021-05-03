import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

export default function Search(props) {
  console.log(props)
  return (
    <div className="search-container">
      <label className="search" htmlFor="search-input">
        <input
          onSubmit={(e) => props.onSubmit(e)}
          className="search-input"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          name="Search"
          placeholder="Search"
          type="text"
          autoFocus
        />
        {/* <Link to="/bartenders">
          <button>Search</button>
        </Link> */}
      </label>
    </div>
  );
};

