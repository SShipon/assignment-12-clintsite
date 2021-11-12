import React from "react";
import { Link } from "react-router-dom";

const Car = (props) => {
  const { _id, carName, img, description,price } = props.car;
  return (
    <div>
      <div className="card mb-3 bg-dark border-light">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{carName}</h5>
          <p className="card-text">{description.slice(0, 120)}</p>

           <h5 className="card-title">{price}</h5>
          <p className="card-text">
            <Link to={`/car/${_id}`}>
              <button className="btn btn-info">Buy Now</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Car;
