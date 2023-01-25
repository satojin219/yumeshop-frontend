import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'src/styles/Globals';
import '../components/organisms/carousel/image-gallery.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
