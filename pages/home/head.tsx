import Head from "next/head";

export default function ComponentHead() {
  return (
    <div>
      <Head>
        <title>Cruz | Resume</title>
        <meta
          name="description"
          content="Um pouco sobre meu trabalho e sobre mim"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
