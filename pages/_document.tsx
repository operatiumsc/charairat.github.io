import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='expires' content='0' />
        <meta httpEquiv='pragma' content='no-cache' />

        <meta name="description" content="Explore my website to learn more about me, my skills, experience, and some of the projects I have worked on. 
        Feel free to download my CV to discover my qualifications and see why I am the one you are looking for."/>

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
