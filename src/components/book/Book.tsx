import { IBook } from "../../types";
import './book.css'



const Book = ({bookInfo}: {bookInfo: IBook}) => {
  return (
    <div className="book" style={{borderColor: bookInfo.cover_color}}>
      <img src={bookInfo.simple_thumb} alt={bookInfo.title} />
      <div className="book-info">
          <div className="title">{bookInfo.title}</div>
          <div className="author">{bookInfo.author}</div>
          <div className="tags">
            {
              bookInfo.genre.map((genre, i) => 
              <div className="genre-tag" key={i}>
                <span>{genre}</span>
              </div>
              )
            }
          </div>
      </div>
    </div>
  )
}

export default Book;