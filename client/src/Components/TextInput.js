import React from "react";

const TextInput = ({ label, id, value, action }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label> <br />
      <input type="text" id={id} value={value} onChange={action}></input>
    </>
  );
};

export default TextInput;
