import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleReview from '../SingleReview/SingleReview';
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://powerful-fjord-72583.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
     
      <h3 className="text-center my-4"> <span className="text-info">Customers</span> Review<span className="text-warning"> Say</span></h3>
      <div className="cars-container">
        {reviews.map((review) => (
          <SingleReview
            key={review._id}
            review={review}
          ></SingleReview>
        ))}
        
      </div>
      <Link to={`/review`}><Button style={{cursor:'pointer'}} type="button" className="btn btn-info text-center mx-3 mb-3  button">Please Your Review</Button></Link>
    </div>
  );
};

export default Review;