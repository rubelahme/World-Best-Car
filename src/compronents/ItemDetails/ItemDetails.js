import React, { useState } from "react";
import { useEffect } from "react";
import fakeData from "../../fakeData/fakeData";
import Background from "../../images/all.jpg";
import MenuView from "../MenuView/MenuView";

const ItemDetails = () => {
  const [time, setTime] = useState([]);
  useEffect(() => {
    const times = fakeData;
    setTime(times);
  }, [time]);
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
        {time.map((data) => (
          <div className="col-md-3 text-center p-5">
            <MenuView Data={data}></MenuView>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
