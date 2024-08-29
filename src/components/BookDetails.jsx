// src/components/BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../utils/categoryData';
import { Star, StarHalf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const {newBook} = useSelector((state)=>state.books)

  const [bookDetail ,setBookDetails] = useState();


  const getBooks=()=>{
    let addedBook = books;
    if(newBook && newBook.length > 0){
        addedBook = [...addedBook,...newBook];
    }
    const book = addedBook.find((b) => b.id === parseInt(bookId));
    setBookDetails(book)
  }

    useEffect(()=>{
      getBooks();
    },[newBook])


    
  if (!bookDetail) {
    return <div>Book not found</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <Star key={i} color="gold" /> : <StarHalf  key={i} color="gold" />);
    }
    return stars;
  };

  const backBtn = ()=>{
    navigate(-1);
  }

  return (
    <div className="p-4 w-full justify-center  flex gap-4">
        <div>
      <img src={bookDetail.image} alt={bookDetail.title} className="w-[80%] h-[60%] rounded mb-4" />
        </div>
        <div>
      <h2 className="text-2xl font-bold mb-2">{bookDetail.title}</h2>
      <h3 className="text-lg mb-2">By {bookDetail.author}</h3>
      <p className="mb-4">{bookDetail.description}</p>
      <div className="flex items-center mb-4">
        {renderStars(bookDetail.rating)}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={backBtn}>Back to List</button>
        </div>
    </div>
  );
};

export default BookDetails;
