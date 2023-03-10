import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  return (
    <div>
      <h4>{router.query.title || "Oops ! Wrong Access ."}</h4>
    </div>
  );
}

export default Detail;