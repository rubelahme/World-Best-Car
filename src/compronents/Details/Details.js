import "./Details.css";
import { useParams } from "react-router";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useContext } from "react";
import { privacyWeb } from "../../App";

const Details = (props) => {
  const { menu } = useParams();
  const [start, setStart] = useContext(privacyWeb);
  console.log(start);
  return (
    <div>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="menuForm">
            <form action="">
              <label htmlFor="">Pick From</label>
              <br />
              <input type="text" placeholder="Dhaka" />
              <br />
              <label htmlFor="">Pick To</label>
              <br />
              <input type="text" placeholder="Tangail" />
              <br />
              <br />
              <input type="date" name="" id="" />
              <br />
              <input className="search" type="submit" value="Search" />
            </form>
          </div>

          {start.id === "menu" && <img src={start.img} alt="" />}
        </div>
        <div className="col-md-8">
          <Map google={props.google} zoom={14}>
            <Marker onClick={props.onMarkerClick} name={"Current location"} />
            <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyD_pEXmvD1bTH6P4iYbWnn78BcEW-0W9Xs",
}))(Details);
