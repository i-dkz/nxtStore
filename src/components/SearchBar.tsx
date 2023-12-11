import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex relative w-full">
      <input
        type="text"
        className="border max-w-[1060px] w-full rounded-md pl-10 pr-4 py-2"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
      <button className='ml-2 h-[42px] border rounded-md px-2 hover:bg-slate-100'>Search</button>
    </div>
  );
};

export default SearchBar;
