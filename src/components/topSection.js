import React from "react";

const TopSection = ({ handleClick, newItem, setNewItem }) => {
  return (
    <form className="top-section-form">
      <input
        type="text"
        placeholder="Task to be done.."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button id="add-button" onClick={handleClick}>
        +
      </button>
    </form>
  );
};

export default TopSection;
