import React from "react";
import { Radio } from "@mui/material";
// import { IconName } from "react-icons/fa";

const Content = ({ items, handleCHeck }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <div className="item-div" key={item.id}>
          <Radio
            key={item.id}
            onClick={() => handleCHeck(item.id)}
            checked={item.checked}
            style={{ color: "	#707070" }}
          />
          <span className="span">{item.body}</span>
          <span className="food-icons">icon</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
