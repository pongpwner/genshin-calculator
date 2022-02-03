import React, { useEffect, useState } from "react";
import "./modal.styles.scss";
const Modal = ({ children, hidden, setHidden }) => {
  if (hidden) {
    return null;
  }
  return (
    <div className="modal">
      <div className="container">
        <div className="top-row">
          <button className="close" onClick={() => setHidden(true)}>
            {" "}
            X
          </button>
        </div>
        <div className="content ">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
