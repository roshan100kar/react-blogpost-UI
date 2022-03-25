import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/pic-1.jpg";
import profile2 from "./image/pic-2.jpg";
import profile3 from "./image/pic-3.jpg";
import SingleComments from "./SingleComments.js";
import UserCard from "./userCard";

const App = () => {
  return (
    <div
      className="ui comments"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems:"center",
        marginTop: "100px"
      }}
    >
      <UserCard>
        <SingleComments
          name="goku"
          date=" 7:00 PM"
          comment="wow🙌"
          image={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComments
          name="vegeta"
          date=" 8:00 PM"
          comment="cool😎"
          image={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComments
          name="goten"
          date=" 9:00 PM"
          comment="wow🙌"
          image={profile3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
