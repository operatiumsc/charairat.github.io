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

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Nav />
      <Hero />
      <About />
      <Project />
    </div>
  )
}
