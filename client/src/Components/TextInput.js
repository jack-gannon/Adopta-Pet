import React from "react";
import { textInput } from "../styles/component-modules/textinput.module.css";
import { label } from "../styles/type.module.css";
const TextInput = ({ labelText, id, value, action }) => {
  return (
    <>
      <label className={label} htmlFor={id}>
        {labelText}
      </label>{" "}
      <br />
      <input
        type="text"
        id={id}
        value={value}
        onChange={action}
        className={textInput}
      ></input>
    </>
  );
};

export default TextInput;
