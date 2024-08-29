import React from 'react';
import { categories } from '../utils/categoryData';
import Card from './common/Card';

const Home = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-extrabold  mb-4">Welcome to the Online Library System</h1>
        <p className="text-xl text">Discover a world of knowledge and adventure with just a click.</p>
      </div>

      {/* Categories Section */}
      <div className="flex justify-center items-center flex-wrap w-full mt-10">
        {categories.map((item) => (
          <div key={item.id} className="m-4">
            <Card 
              type="category" 
              name={item.name} 
              categoyId={item.id} 
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold">Choose Your Category</h2>
        <p className="text-lg mt-2">Explore our wide range of book categories and find your next favorite read.</p>
      </div>
    </div>
  );
};

export default Home;
