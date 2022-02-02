import React, { useEffect, useState } from "react";
import "./modal.styles.scss";
const Modal = ({ children, hidden, setHidden }) => {
  if (hidden) {
    return null;
  }
  return (
    <div className="modal">
      <div className="container">
        <button onClick={() => setHidden(true)}> X</button>
        <div className="content ">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
