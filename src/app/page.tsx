import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-[url('/hongkong.jpeg')]">
      <Head>
          <title>Travel Photos</title>
          <meta name='description' content='generated by create next app'/>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <p>Placeholder for main</p>
      </main>

      <footer>
          <p>Placeholder for footer</p>
      </footer>
  </div>
    );
}