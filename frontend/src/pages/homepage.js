import React from "react";
import useFetch from "../hooks/useFetch";
import PuffLoader from "react-spinners/PuffLoader";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { data, error, loading } = useFetch("http://localhost:1337/reviews");

  if (loading) return <PuffLoader color='#AC68CE' />;
  if (error) return <p className='error'>{error()}</p>;

  return (
    <div>
      {data.map((review) => (
        <div className='review-card' key={review.id}>
          <div className='rating'>{review.rating}</div>
          <h2>{review.title}</h2>
          <small>console list</small>
          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
