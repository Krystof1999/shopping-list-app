import React from "react";

const Footer = ({ handleDeleteAll }) => {
  return (
    <div className="footer-div">
      <button className="footer-button" onClick={handleDeleteAll}>
        Clear all
      </button>
    </div>
  );
};

export default Footer;
