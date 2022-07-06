import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://we-make-websites.vercel.app/',
          title:
            'Shopify Plus Agency | We Make Websites | Shopify Designers & Developers',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://raw.githubusercontent.com/antonio-lopez/we-make-websites/main/public/og-image-cover.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
