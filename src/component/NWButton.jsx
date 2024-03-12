import React, { useState } from "react";

const NWButton = (props) => {
  const { name, type, classnames, children, ...rest } = props;
  return (
    <button
      {...rest}
      name={name}
      className={classnames ?? `btn btn-outline-success`}
      type={type}
    >
      {children}
    </button>
  );
};

export default NWButton;
