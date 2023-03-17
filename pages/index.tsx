import Project from "./components/project";
import About from "./components/about";
import Hero from "./components/hero";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div>
      <head>
        <title>Charairat Swaengsap</title>
      </head>
      <body>
        <Nav />
        <Hero />
        <About />
        <Project />
      </body>
    </div>

  )
}
