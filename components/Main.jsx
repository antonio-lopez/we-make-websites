import Link from 'next/link';
import Image from 'next/image';

const Main = () => {
  return (
    <section className="bg-black py-6 text-white">
      <div className="layout px-4">
        <h1 className=" mt-[20vh] mb-9 text-3xl">
          WMW, the Shopify Plus agency for international brands.
        </h1>
        <div className="mt-12 mb-4">
          <div className="mr-6">
            <Link href="/" passHref>
              <a href="seewhy" className="inline-block border-b-2">
                See why
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-96 w-full md:max-w-7xl">
        <Image
          src="/images/WMW-Reel-Teaser-V10-Mobile.jpg"
          layout="fill"
          objectFit="contain"
          alt="portfolio example"
        />
      </div>
    </section>
  );
};

export default Main;
