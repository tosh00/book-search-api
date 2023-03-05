import { useRef } from "react";
import { IGenre } from "../../types";
import './filters.css'

interface filtersProps {
  genres: IGenre[];
  filterCallback: { (genre: string, phrase: string): void };
}

const Filters = ({ genres, filterCallback }: filtersProps) => {
  const genreRef = useRef<HTMLSelectElement>(null);
  const phraseRef = useRef<HTMLInputElement>(null);

  const handleFilter = () => {
    if (genreRef.current && phraseRef.current) {
      console.log(genreRef.current.value, phraseRef.current.value)
      filterCallback(genreRef.current.value, phraseRef.current.value);
    }
  };

  return (
    <div className="filters">
      <div className="genre-selector">
        <select name="genre-selector" id="genre-selector" ref={genreRef} onChange={handleFilter}>
          <option value="">All</option>
          {genres.map((genre, i) => (
            <option value={genre.name} key={i}>{genre.name}</option>
          ))}
        </select>
      </div>
      <div className="search-bar">
        <input type="text" name="phrase" id="phrase" placeholder="Search" ref={phraseRef} onChange={handleFilter}/>
      </div>
    </div>
  );
};

export default Filters;
