import React from 'react';

export default function FilmList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div className="film" key={film.id}>
          <h1>{film.title}</h1>
          <p>Box Office Total: {film.box_office_total}M</p>
          <p>Acadamy Award Nominations: {film.academy_award_nominations}</p>
        </div>
      ))}
    </section>
  );
}
