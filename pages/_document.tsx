import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta http-equiv='cache-control' content='no-cache' />
      <meta http-equiv='expires' content='0' />
      <meta http-equiv='pragma' content='no-cache' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
