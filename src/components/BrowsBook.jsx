import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../utils/categoryData';
import Card from './common/Card';
import { Search } from 'lucide-react';
import { useSelector } from 'react-redux';

const BrowsBook = () => {
  const {categoyId} = useParams();
  const [data , setData] = useState([]);
  const [searchQuery,setSearchQuery] = useState("");

  // subscrie the newBook from redux store
  const {newBook} = useSelector((state)=>state.books);


  // handler for handling 
  const handleBookList = () => {
    let filteredBooks = books;

    // check for the category 
    if (categoyId) {
      filteredBooks = filteredBooks.filter((item) => item.categoryId == categoyId);
    }



    // add the new Book added to the library
    if (newBook && newBook.length > 0) {
      filteredBooks = [ ...newBook,...filteredBooks];
    }
    

    // for search filter
    if (searchQuery) {
      filteredBooks = filteredBooks.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setData(filteredBooks);
  };



  useEffect(()=>{
    handleBookList()
  },[categoyId,searchQuery,newBook])


  return (
    <div className='flex w-full justify-center items-center flex-wrap '>
    {/* Search Input */}
    <div className='w-full flex justify-center my-4'>
        <div className='relative w-1/2'>
          <input
            type='text'
            className='border border-gray-300 rounded pl-10 pr-4 py-2 w-full'
            placeholder='Search books...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <Search color='black' className='cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2' />
        </div>
      </div>

    {/* Book List */}
    <div className='w-full flex justify-center items-center flex-wrap'>
      {data.map((item) => (
        <Card
          key={item.id} 
          type={'book'}
          image={item.image}
          title={item.title}
          authr={item.author}
          description={item.description}
          rating={item.rating}
          bookId={item.id}
        />
      ))}
    </div>
  </div>
  )
}

export default BrowsBook