import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    // console.log(props.author)
  
  if (props.type === "book") {
    return (
        <div className="border rounded p-4 m-2 w-60">
        <img src={props.image} alt={props.title} className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="text-lg font-bold mb-1">{props.title}</h3>
        <p className="text-sm text-gray-700 mb-2">{props.auther}</p>
        <Link to={`/book-details/${props.bookId}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    );
  } else if (props.type === "category") {
    return (
      <Link to={`/browse-books/${props.categoyId}`} className="w-52 border bg-white rounded-lg shadow-md overflow-hidden m-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
        <div className="bg-gradient-to-r  from-blue-500 to-indigo-600 p-6">
          <h2 className="text-2xl font-bold text-white text-center">
            {props.name}
          </h2>
        </div>
      </Link>
    );
  } else {
    return null; // Fallback in case neither type is provided
  }
};

export default Card;
