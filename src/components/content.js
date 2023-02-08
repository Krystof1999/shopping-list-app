import React from "react";
import { Radio } from "@mui/material";

const Content = ({ items, handleCHeck }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <div className="item-div" key={item.id}>
          <Radio
            key={item.id}
            onClick={() => handleCHeck(item.id)}
            checked={item.checked}
            style={{ color: "grey" }}
          />
          <span>{item.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
