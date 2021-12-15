import React from 'react';

export default function FilmList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div className="film" key={film.id}>
          <h1>{film.title}</h1>
        </div>
      ))}
    </section>
  );
}
