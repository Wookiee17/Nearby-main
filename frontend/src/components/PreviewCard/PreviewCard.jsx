import React from "react";
import "./PreviewCard.css";
import { data } from "../data/data";

export function PreviewCard(props) {
  return (
    <>
      <p className="preview-card__restaurant-name">{props.restaurant.title}</p>
      <div className="preview-card__delivery">
        {/* <p className="preview-card__delivery__currency">
          ₹₹{" "}
          {props.restaurant.categories.map(({name}) => name)}
        </p> */}
        {/* <div className="preview-card__delivery__time">
          <p>
            In {props.restaurant.etaRange.max} Min
          </p>
        </div> */}
      </div>
    </>
  );
}
