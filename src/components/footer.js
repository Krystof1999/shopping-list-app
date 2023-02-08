import React from "react";

const Footer = ({ items, handleDeleteAll, handleDeleteSelected }) => {
  return (
    <div className="footer-div">
      <button className="footer-button-clear-all" onClick={handleDeleteAll}>
        Clear all
      </button>

      <button
        className="footer-button-clear-selected"
        // onClick={() => handleDeleteSelected(item.id)} //TODO
      >
        Clear Selected
      </button>
    </div>
  );
};

export default Footer;
