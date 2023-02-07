import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TopSection = ({ handleClick, newItem, setNewItem }) => {
  return (
    <form className="top-section-form">
      <input
        className="input"
        type="text"
        placeholder="Task to be done.."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="add-button" onClick={handleClick}>
        +
      </button>
    </form>
  );
};

export default TopSection;
