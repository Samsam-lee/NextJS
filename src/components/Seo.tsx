import Head from "next/head";

type Title = {
  title: string;
}

export default function Seo({ title }: Title) {
  return (
    <Head>
      <title>{`${title} | SpoonMe Movies`}</title>
    </Head>
  );
}