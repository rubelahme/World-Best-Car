import React, { useEffect, useState } from "react";
import "./smail.css";
import simpleData from "../../fakeData/simpleData.json";
import Team from "../saidItem/Team";
const SmailDetails = (props) => {
  const { img } = props.data[0];
  const [user, setUser] = useState([]);
  useEffect(() => {
    const yellow = simpleData;
    setUser(yellow);
  }, [user]);
  console.log(user);
  return (
    <div className="size">
      <div className="text-center address p-3">
        <h4>Dhaka</h4>
        <h4>Tangail</h4>
      </div>
      {user.map((pd) => (
        <Team Data={pd} pick={img}></Team>
      ))}
    </div>
  );
};

export default SmailDetails;
