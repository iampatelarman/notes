import React from "react";
import Img from "../../Images/image-removebg-preview 1.png";
import "./emptyArea.css";

const EmptyArea = () => {
  return (
    <div className="empty-area">
      <div className="notes-img">
        <img src={Img} alt="notes" />
      </div>
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className="footer">
        <span className="material-icons">lock</span>
        end-to-end encrypted
      </div>
    </div>
  );
};

export default EmptyArea;
