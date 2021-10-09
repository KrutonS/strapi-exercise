import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
      reviews {
        title
        body
        rating
        id
        categories {
          name
          id
        }
      }
    }
  }
`;

export default function Category() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CATEGORY, { variables: { id } });
  console.log(data);
  const name = data?.category?.name;
  const reviews = data?.category?.reviews || [];
  return (
    <div>
      <h2>{name}</h2>
      {reviews.map((review) => (
        <div className='review-card' key={review.id}>
          <div className='rating'>{review.rating}</div>
          <h2>{review.title}</h2>
					{review.categories.map(c=>(
          <small key={c.id}>{c.name}</small>
					))}
          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
