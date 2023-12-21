import { useSearchStore } from '@/store/SearchStore';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const {setSelectedSearch} = useSearchStore();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Get the input value
    const inputValue = (event.currentTarget.elements.namedItem('searchInput') as HTMLInputElement).value;

    setSelectedSearch(inputValue)
    // Add your logic for handling the search here
    console.log(inputValue);
  };

  

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 border rounded-md"
        name="searchInput"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
      <button className='ml-2 h-[42px] border rounded-md px-2 hover:bg-slate-100' type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
