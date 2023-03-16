import { useRouter } from "next/router";

type DefaultMovieData = {
  title: string;
  id: string;
}

const Detail = () => {
  const router = useRouter();
  const [title, id]: [string, string] = router.query.params as [string, string];
  console.log(typeof router.query.params);

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export default Detail;
