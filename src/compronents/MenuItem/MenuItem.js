import React from "react";
import { useHistory } from "react-router";
import "./MenuItem.css";
const MenuItem = (props) => {
  console.log(props);
  const { id, name, img } = props.Data;
  let history = useHistory();
  const handleDetails = () => {
    history.push(`/item/${id}`);
  };
  return (
    <div onClick={handleDetails} className="details">
      <img src={img} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default MenuItem;
