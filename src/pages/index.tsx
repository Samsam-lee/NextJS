import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <p>Index Page</p>
      <style jsx>{`
        p {
          color: white;
          background-color: grey;
        }
      `}</style>
    </div>
  );
}
