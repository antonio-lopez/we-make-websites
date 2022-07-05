import Link from 'next/link';
import PortfolioCarousel from './PortfolioCarousel';

const Portfolio = () => {
  return (
    <section className="bg-black py-6 text-white">
      <div className="layout px-4">
        <h1 className="text-2xl lg:w-1/2 lg:text-5xl">
          WMW, a Tech Mahindra company, is the first international Shopify Plus
          agency.
        </h1>
        <p className="my-10 text-sm lg:w-1/2 lg:text-base">
          With over a decade of
          <span className="underline"> Shopify experience</span>, we’re no
          stranger to this technology. That’s why the high-growth, international
          brands wanting the most out of this platform put their online stores
          into our hands.
          <br />
          <br />
          Through
          <span className="underline"> designing</span>,
          <span className="underline"> developing</span>, and
          <span className="underline"> optimizing</span>
          <span className="underline"> Shopify Plus stores</span>, we do the
          retailers we work with justice — and a whole lot more. Bolstering
          revenue, strengthening stats, and elevating their brands.
        </p>
        <Link href="/" passHref>
          <a
            href="projects"
            className="underline underline-offset-8 hover:border-red-600 hover:text-red-600 lg:text-base"
          >
            Our Shopify Plus projects
          </a>
        </Link>
      </div>
      <PortfolioCarousel />
    </section>
  );
};

export default Portfolio;
