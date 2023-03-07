import { useEffect, useRef, useState } from "react";
import { IBook, IGenre } from "../../types";
import { fetchBooks, fetchGenres } from "../../utils/fetches";
import BookList from "../bookList/BookList";
import Filters from "../filters/Filters";
import Loader from "../loader/Loader";
import "./books-container.css";


const BooksContainer = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchBooks().then((books) => {
      setBooks(books);
      setFilteredBooks(books);
    });
    fetchGenres().then(setGenres);
  }, []);

  const handleScroll = ()=> {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setCurrentPage(prevState => prevState + 1);
    }
  }
  useEffect(() => {
    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll);
  }, []);


  const filterBooks = (genre: string, phrase: string) => {
    setCurrentPage(1);
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
      <BookList books={filteredBooks} currentPage={currentPage}/>
    </div>
  );
};

export default BooksContainer;
