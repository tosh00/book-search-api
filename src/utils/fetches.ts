import { IBook, IBookRes, IGenre } from "../types"

const BOOKS_URL = `https://wolnelektury.pl/api/books/`;

export const fetchBooks = async (): Promise<IBook[]> => {
  return new Promise(async (resolve, reject) => {
    fetch(BOOKS_URL)
    .then(res => res.json())
    .then((books: IBookRes[]): IBook[] => {return books.map(book => {return {...book, genre: book.genre.split(', ')}})})
    .then(resolve)
    .catch(reject)
  })
}


export const fetchGenres = async (): Promise<IGenre[]> => {
  return new Promise(async (resolve, reject) => {
    fetch('https://wolnelektury.pl/api/genres/')
    .then(res => res.json())
    .then(resolve)
    .catch(reject)
  })
}