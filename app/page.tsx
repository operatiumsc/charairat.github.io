import { Metadata } from 'next'

import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Footer from '../components/footer'

export const metadata: Metadata = {
    title: 'Charairat Swaengsap | Full Stack Developer',
    description: 'Charairat Swaengsap is a Full Stack Developer based in Bangkok, Thailand. She is passionate about building mobile applications using Flutter and also can build RESTful API Server with Node.js. She have knowledge in both front-end and back-end development. She is also a fast learner and can adapt to new technologies quickly. She is looking for a new opportunity to work with a team of developers to build amazing products together.',
    keywords: [
        'Charairat Swaengsap',
        'Full Stack Developer',
        'Front-end Developer',
        'Flutter Developer',
        '.NET Developer',
        'SQL Developer',
        'Mobile Developer',
        'Software Developer',

        'Flutter',
        'Node.js',
        'Dart',
        'JavaScript',
        'TypeScript',
        'RESTful API',

        'Bangkok',
        'Thailand',
    ]
}

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Footer />
        </div>
    )
}