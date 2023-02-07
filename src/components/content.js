import React from "react";

const Content = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <div className="item-div" key={item.id}>
          <input type={"checkbox"} className={"checkbox"} />
          <span>{item.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Content;
