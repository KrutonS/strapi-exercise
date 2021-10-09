import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-spinners/MoonLoader";
import { useQuery, gql } from "@apollo/client";
import Markdown from 'react-markdown'

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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
`;

export default function ReviewDetails() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(REVIEW, { variables: { id } });
  const review = data?.review;
  if (loading) return <Spinner color='#AC68CE' />;
  if (error) return <div className='error'>{error.message}</div>;
  return (
    <div className='review-card'>
      <div className='rating'>{review?.rating}</div>
      <h2>{review?.title}</h2>
      {review.categories.map((c) => (
        <small key={c.id}>{c.name}</small>
      ))}
      <Markdown>{review?.body}</Markdown>
    </div>
  );
}
