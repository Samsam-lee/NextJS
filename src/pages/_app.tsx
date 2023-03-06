import { AppProps } from "next/app";
import Layout from "../../components/Layout";
import "../styles/globals.css";

export default function App({Component, pageProps}: AppProps) {
  return <Layout>
    <Component {...pageProps} />

    <style jsx global>{`
        p {
          color: white;
          background-color: grey;
        }
      `}</style>
  </Layout>;
}
