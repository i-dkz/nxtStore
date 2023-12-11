import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative flex w-full">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 border rounded-md"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
      <button className='ml-2 h-[42px] border rounded-md px-2 hover:bg-slate-100'>Search</button>
    </div>
  );
};

export default SearchBar;
