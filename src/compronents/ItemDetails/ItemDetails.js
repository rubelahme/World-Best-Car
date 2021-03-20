import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { privacyWeb } from "../../App";
import fakeData from "../../fakeData/fakeData";
import Background from "../../images/all.jpg";
import MenuView from "../MenuView/MenuView";
const ItemDetails = () => {
  const [start, setStart] = useContext(privacyWeb);
  useEffect(() => {
    setStart(fakeData);
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
        {start.map((data) => (
          <div className="col-md-3 text-center p-5">
            <MenuView Data={data}></MenuView>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
