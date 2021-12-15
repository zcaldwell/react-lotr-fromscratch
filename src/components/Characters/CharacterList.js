import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <section className="characters">
      {characters.map((char) => (
        <div key={char.name}>
          <a href={char.wikiUrl}>{char.name}</a>
          <p>{char.dates}</p>
        </div>
      ))}
    </section>
  );
}
