import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <section className="characters">
      {characters.map((char) => (
        <div key={char.name}>
          <a>{char.name}</a>
          <p>
            {char.birth} - {char.death}
          </p>
          <p>{char.race}</p>
        </div>
      ))}
    </section>
  );
}
