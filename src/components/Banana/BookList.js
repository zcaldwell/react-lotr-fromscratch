import React from 'react';

export default function BookList({ books }) {
  return (
    <section className="books">
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
        </div>
      ))}
    </section>
  );
}
