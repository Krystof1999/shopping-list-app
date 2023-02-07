import React from "react";
import { Radio } from "@mui/material/Radio";

const RadioButton = () => {
  return (
    <Radio
      value={value}
      onChange={handleChange}
      label={label}
      checked={checked}
    />
  );
};

export default RadioButton;
