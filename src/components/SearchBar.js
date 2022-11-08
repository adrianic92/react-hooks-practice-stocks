import React from "react";

function SearchBar( {sorter, setSorter, setFilter}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={ () => setSorter("alpha") }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={ () => setSorter("price") }
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={ (e) => setFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
