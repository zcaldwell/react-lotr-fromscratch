import React from 'react';

export default function Controls({ setRace, race, handleClick, query, setQuery }) {
  return (
    <div>
      <div>
        <input
          placeholder="Search Characters"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
      </div>
    </div>
  );
}
