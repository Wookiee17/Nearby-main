import React from "react";
import "./SearchPanel.css";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId
} from "react-google-places-autocomplete";

export function SearchPanel(props) {
  function inputHandler(event) {
    console.log(event.target.value);
    props.onInputChange(event.target.value.toLowerCase());
  }

  return (
    <label className="search-panel__label">
      <GooglePlacesAutocomplete apiKey="AIzaSyBfvIGHRXKZpovQBnn8tmKuIEJzOjZFjKM" />
    </label>
  );
}
