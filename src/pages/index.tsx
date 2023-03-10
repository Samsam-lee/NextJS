import axios, { AxiosResponse } from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
// import { useRouter } from "next/router";
import Seo from "../components/Seo";

const IMAGE_URL: string = "https://image.tmdb.org/t/p/w500";

type Movie = {
  adult : boolean;
  backdrop_path: string;
  genre_ids: number[];
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

export default function Home({ movies }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // const onClick = (id: string) => {
  //   router.push({
  //     pathname: `movies/${id}`,
  //     query: {
  //       title: "temp",
  //     },
  //   }, `movies/${id}`)
  // }

  return (
    <div className="container">
      <Seo title="Index" />
      {!movies ? <div>Loading...</div> : movies.map((movie: Movie) =>
      <Link key={movie.id} as={`movies/${movie.id}`} href={{
        pathname: `movies/${movie.id}`,
        query: {
          title: movie.original_title,
        }
      }}>
        <div className="movie">
          <img src={`${IMAGE_URL}${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      </Link>)}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const empty_data = {} as Movie[];
  try {
    const res: AxiosResponse = await axios.get(`http://localhost:3000/api/movies`);
    if(res.status === 200) {
      const movies: Movie[] = res.data.results;
      return { props: { movies }};
    }
    return { props: empty_data };
  }
  catch(error) {
    console.log(error);
    return { props: empty_data };
  }
}