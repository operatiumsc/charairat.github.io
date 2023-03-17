import Project from "../components/project";
import About from "../components/about";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head >
        <title>Charairat Swaengsap</title>
      </Head>
      <Nav />
      <Hero />
      <About />
      <Project />
    </div>
  )
}
