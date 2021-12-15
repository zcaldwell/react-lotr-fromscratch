import React from 'react';

export default function Controls({ setRace, race, handleClick }) {
  return (
    <div>
      <div>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}
