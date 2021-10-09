import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Markdown from "react-markdown";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      title
      body
      rating
      id
      categories {
        id
        name
      }
    }
  }
`;
console.log(REVIEWS);

export default function Homepage() {
  const { loading, error, data } = useQuery(REVIEWS);
  if (loading) return <PuffLoader color='#AC68CE' />;
  if (error) return <p className='error'>{error.message}</p>;

  return (
    <div>
      {data.reviews.map((review) => (
        <div className='review-card' key={review.id}>
          <div className='rating'>{review.rating}</div>
          <h2>{review.title}</h2>
          {review.categories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}
          <Markdown>{`${review.body.substring(0, 200)}...`}</Markdown>
          <Link to={`/details/${review.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
