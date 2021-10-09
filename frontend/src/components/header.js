import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Spinner from "react-spinners/ClipLoader";
const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

export default function Header() {
  const { loading, error, data } = useQuery(CATEGORIES);
  const categories = data?.categories;
  if (loading) return <Spinner color='#AC68CE' />;
  if (error) return <div className='error'>{error.message}</div>;
  return (
    <div className='site-header'>
      <Link to='/'>
        <h1>Ninja Reviews</h1>
      </Link>
      <nav className='categories'>
        <span>Filter reviews by category:</span>
        {categories.map(({ id, name }) => (
          <Link key={id} to={`/category/${id}`}>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
