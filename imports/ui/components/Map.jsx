import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function GoogleMapComponent() {
  return (
    <GoogleMap

      options={{ disableDefaultUI: false, mapTypeId: 'hybrid',mapTypeControl:false,streetViewControl:false,fullscreenControl:false,zoomControl:false,scaleControl: false, }}
      defaultZoom={13}
      defaultCenter={{ lat: 40.4093, lng: 49.8671 }}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(GoogleMapComponent));
export default function Map() {
  return (
    <WrappedMap

      mapElement={<div style={{ height: `100%` }} />}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=MAPS_API_KEY:)"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh`,position:"fixed",width:"100%" }} />}
    />
  );
}
