import React from "react";

const Input = ({name, theme, ...rest}) => {
  return(
    <input
      name={name}
      { ...rest }
    />
  )
}

export default Input