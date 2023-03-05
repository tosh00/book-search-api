import { IBook } from "../../types";
import Book from "../book/Book";


const  BookList = ({books}: {books: IBook[]}) =>{
  return(
    <div>
      {
        books.slice(0, 20).map((book, i) => 
          <Book bookInfo={book} key={i}/>
        )
      }
    </div>
  )
}

export default BookList;