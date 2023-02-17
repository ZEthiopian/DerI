import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
          lat: 8.957702,
          lng: 38.726285
        },
        zoom: 11
      };
  return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '80vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={9.033493}
            lng={38.842818}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  )
}
