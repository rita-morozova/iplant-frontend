import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          placeholder="Search..."
          onChange={onChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default SearchBar;
