import { useEffect, useState } from "react";
import { IBook } from "../../types";
import Book from "../book/Book";
import Loader from "../loader/Loader";

const BOOKS_ON_PAGE = 20;

const BookList = ({ books, currentPage }: { books: IBook[], currentPage: number }) => {

  return (
    <div>
      {books.slice(0, BOOKS_ON_PAGE * currentPage).map((book, i) => (
        <Book bookInfo={book} key={i} />
      ))}
      <Loader />
    </div>
  );
};

export default BookList;
