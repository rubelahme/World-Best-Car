import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fakeData from "../../fakeData/fakeData.json";
import Background from "../../images/all.jpg";
import MenuView from "../MenuView/MenuView";
const ItemDetails = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(fakeData);
  }, []);
  var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={sectionStyle}>
      <div className="row">
        {user.map((data) => (
          <div className="col-md-3 text-center p-5">
            <MenuView Data={data}></MenuView>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
