import { useEffect, useRef, useState } from "react";
import { IBook, IGenre } from "../../types";
import { fetchBooks, fetchGenres } from "../../utils/fetches";
import BookList from "../bookList/BookList";
import Filters from "../filters/Filters";
import "./books-container.css";

const BooksContainer = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    fetchBooks().then((books) => {
      setBooks(books);
      setFilteredBooks(books);
    });
    fetchGenres().then(setGenres);
  }, []);

  const filterBooks = (genre: string, phrase: string) => {
    console.log("rozdupcam!");
    setFilteredBooks(
      books
        .filter((book) => !genre || book.genre.includes(genre))
        .filter(
          (book) =>
            book.title.toLowerCase().includes(phrase.toLowerCase()) ||
            book.author.toLowerCase().includes(phrase.toLowerCase())
        )
    );
  };

  return (
    <div className="books-container">
      <Filters genres={genres} filterCallback={filterBooks} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default BooksContainer;
