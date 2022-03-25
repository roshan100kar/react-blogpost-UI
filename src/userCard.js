import React from "react";

const userCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          <div className="description">{props.children}</div>
          <div className="ui butom button">
            <i className="add icon"></i>
            Add friend
          </div>
        </div>
      </div>
    </div>
  );
};

export default userCard;
