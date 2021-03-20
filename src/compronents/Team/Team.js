import React from "react";
import "./team.css";
const Team = (props) => {
  const { last_name, id } = props.Data;
  const img = props.pick;
  console.log(id, last_name, img);
  return (
    <div className="team">
      <img src={img} alt="" />
      <span>Id{id}</span>
      <span>${last_name}</span>
    </div>
  );
};

export default Team;
