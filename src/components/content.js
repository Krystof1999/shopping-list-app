import React from "react";
import { Radio } from "@mui/material";

const Content = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <div className="item-div" key={item.id}>
          {/* <input type={"checkbox"} className={"checkbox"} /> */}
          <input>
            {" "}
            <Radio type />{" "}
          </input>
          {/* <Radio
            value="radioA"
            inputProps={{
              "aria-label": "Radio A",
            }}
          /> */}
          <span>{item.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
