import React from 'react';
import { fetchBooks } from '../../services/books';
import { useEffect, useState } from 'react';
import BookList from '../../components/Banana/BookList';

export default function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>LOTR Books</h1>
      <BookList books={data} />
    </div>
  );
}
