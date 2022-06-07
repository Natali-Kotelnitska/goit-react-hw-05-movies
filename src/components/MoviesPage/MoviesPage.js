import { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={handleQuerySearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
