import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <br />
            <strong>Name:</strong> {props.name}
            <br />

            <strong>Age:</strong> {props.occupation}
            <br />

            <strong>Location:</strong> {props.location}
            <br />

      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
