import React from "react";

const Filter = ({ selectFilter }) => {
  return (
    <div>
      <select
        onChange={(e) => selectFilter(e.target.value)}
        className="ui compact menu"
      >
        <option value="none">All</option>
        <option value="beginners">Plants for Beginners</option>
        <option value="bloomingPlants">Blooming Plants</option>
        <option value="lowLight">Low Light</option>
        <option value="brightLight">Bright Light</option>
      </select>
    </div>
  );
};

export default Filter;
