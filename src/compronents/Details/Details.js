import "./Details.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useParams } from "react-router";
import fakeData from "../../fakeData/fakeData";
import { useState } from "react";
import SmailDetails from "../smailDetails/SmailDetails";

const Details = (props) => {
  const { menu } = useParams();
  const [like] = useState(fakeData);
  const deploy = like.filter((pd) => pd.id === parseInt(menu));
  console.log(deploy);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="spaces">
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
            <SmailDetails data={deploy}></SmailDetails>
          </div>
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
