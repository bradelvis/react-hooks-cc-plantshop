import React from "react";

function Search({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search plants by name"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
