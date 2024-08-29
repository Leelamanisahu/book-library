import React, { useState } from 'react';
import { categories } from '../utils/categoryData'; 
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/BookSlice';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
      let catId = Number(categoryId)
    const newBook = {
      id: Math.floor(Math.random() * 10000), // Generate a unique ID for the book
      title,
      author,
      description,
      image,
      categoryId:catId,
      rating,
      newAdd:true,
    };
    dispatch(addBook(newBook))
    navigate("/browse-books")
    
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
    setImage('');
    setCategoryId('');
    setRating(0);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            className="w-full p-2 border rounded"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            min="0"
            max="5"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
