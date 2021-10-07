import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-spinners/MoonLoader";
import useFetch from "../hooks/useFetch";

export default function ReviewDetails() {
  const { id } = useParams();
  const { data:review, error, loading } = useFetch(
    `http://localhost:1337/reviews/${id}`
  );
  if (loading) return <Spinner color='#AC68CE' />;
  if (error) return <div className='error'>{error}</div>;
  return (
    <div className='review-card'>
      <div className='rating'>{review.rating}</div>
      <h2>{review.title}</h2>
      <small>console list</small>
      <p>{review.body}</p>
    </div>
  );
}
