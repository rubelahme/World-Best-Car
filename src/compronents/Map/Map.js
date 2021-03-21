import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Maps = (props) => {
  return (
    <Map google={props.google} zoom={14}>
      <Marker onClick={props.onMarkerClick} name={"Current location"} />
      <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyD_pEXmvD1bTH6P4iYbWnn78BcEW-0W9Xs",
}))(Maps);
