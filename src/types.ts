export interface IBookRes{
  title: string,
  author: string,
  simple_thumb: string,
  genre: string,
  cover_color: string
}

export interface IBook{
  title: string,
  author: string,
  simple_thumb: string,
  genre: string[],
  cover_color: string
}

export interface IGenre{
  url: string;
  href: string;
  name: string;
  slug: string;
}