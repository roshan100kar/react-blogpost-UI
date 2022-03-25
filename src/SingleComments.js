import React from "react";
import profile1 from "./image/pic-1.jpg";
const SingleComments = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.image} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default SingleComments;
