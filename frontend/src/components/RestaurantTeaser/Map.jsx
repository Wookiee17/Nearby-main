/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

const Markers = ({ places }) => {
  return places.map(place => {
    return (
      <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} />
    );
  });
};

const Map = ({ places, zoom, center }) => {
  return (
    <GoogleMap defaultZoom={zoom} defaultCenter={center}>
      <Markers places={places} />
    </GoogleMap>
  );
};

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};

class MapWithMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { places: this.props.places }; //initialize initial state from props
  }

  addPlace() {
    const newPlace = {
      id: this.state.places.length + 1,
      lat: getRandomInRange(-30.0, -35.0, 3),
      lng: getRandomInRange(110.0, 150.0, 3)
    };
    this.setState(prevState => ({
      places: [...prevState.places, newPlace]
    }));

    /*if(this.state.places.length > 10) { 
      clearInterval(this.intervalId)
    }*/
  }

  componentDidMount() {
    this.intervalId = setInterval(this.addPlace.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Map
        center={this.props.center}
        zoom={this.props.zoom}
        places={this.state.places}
      />
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));
