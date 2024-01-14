import React from "react";
import { Link } from "react-router-dom";

const MealCart = ({ name, image, id }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Meal" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-4 truncate">{name}</h2>
        <div className="card-actions flex justify-end">
          <Link to={`/detail/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCart;
