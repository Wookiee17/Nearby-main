import React, {useState, Component} from "react";
import "./RestaurantTeaser.css";
import { data } from "../data/data";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import "../PreviewCard/PreviewCard.css";
import GoogleMapReact from 'google-map-react';
import marker from './marker.png';


// const AnyReactComponent = ({ text }) => <h2 >{text}</h2>;
const AnyReactComponent = ({  img_src, text }) => <div ><img src={img_src} style={{ height: "30px", width: "18px"}} /></div>;

export function RestaurantTeaser(props) {
  const defaultProps = {
    center: {
      lat: props.restaurant.location.latitude,
      lng: props.restaurant.location.longitude
    },
    zoom: 14
  };
   
  return (
    <div className="restaurant-teaser">
      <div className="restaurant-teaser__background" >
      
      
    
        <GoogleMapReact
        
          bootstrapURLKeys={{ key: "AIzaSyC87tvxkpDiF98HFzYaWqJq_T2B0Mmg-6M" }}
          defaultCenter={defaultProps.center}
          defaultZoom= {defaultProps.zoom}
        >
          <AnyReactComponent
            lat={ props.restaurant.location.latitude}
            lng={ props.restaurant.location.longitude}
            text={props.restaurant.title}
            img_src={marker}
          />
         
        </GoogleMapReact>
     
     
       
       </div>
      {/* <div className="restaurant-teaser__wrapper">
        <div className="restaurant-teaser__preview-card">
          <PreviewCard restaurant={data}/>
        </div>
      </div> */}
    </div>
  );
}
