import axios from "axios";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

const DEFAULT_ADDR: string = "https://api.themoviedb.org/3/";
const API_KEY: string = "10923b261ba94d897ac6b81148314a3f";

type Movie = {
  adult : boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movies, setMovies] = useState<Array<Movie>>();

  const callApi = async () => {
    return await axios.get(`${DEFAULT_ADDR}movie/popular?api_key=${API_KEY}`);
  }

  useEffect(() => {
    callApi().then(({ data }) => {
      setMovies(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div>
      <Seo title="Index" />
      {!movies ? <div>Loading...</div> : movies.map(movie =>
      <div key={movie.id}>
        <h4>{movie.original_title}</h4>
      </div>)}
    </div>
  );
}
