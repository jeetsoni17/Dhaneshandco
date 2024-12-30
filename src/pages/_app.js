import '../scss/custom.scss'; // Adjust the path according to where your SCSS files are
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // You can add global side-effects here if needed
  }, []);

  return (
    <>
      <Head>
        {/* Link to favicon located in the public directory */}
        <link rel="icon" href="/favicon.ico" />
        <title>Dhanesh & Co</title>
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;