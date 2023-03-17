import Project from "./components/project";
import About from "./components/about";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Charairat Swaengsap</title>
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='expires' content='0' />
        <meta http-equiv='pragma' content='no-cache' />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Nav />
      <Hero />
      <About />
      <Project />
    </div>
  )
}
