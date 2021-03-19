import React from "react";
import { useHistory } from "react-router";
import "./MenuView.css";

const MenuView = (props) => {
  const { id, name, img } = props.Data;
  let history = useHistory();
  const handleView = () => {
    history.push(`/item/${id}`);
  };
  return (
    <div onClick={handleView} className="view">
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default MenuView;
