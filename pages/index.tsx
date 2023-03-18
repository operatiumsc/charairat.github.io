import Project from "../components/project";
import About from "../components/about";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Footer from "@/components/footer";
import CookieConsentNotify from "@/components/cookie_consent";


export default function Home() {
  return (
    <div>
      <>
        <title>Charairat&apos;s Portfolio</title>
      </>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Footer />
      <CookieConsentNotify />
    </div>
  )
}
