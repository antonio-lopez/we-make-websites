/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { images } from '../constants/data';

const PortfolioCarousel = () => {
  return (
    <div className="carousel mx-auto mt-4 max-w-screen-2xl">
      {images.map((image) => {
        return (
          <div className="carousel-item" key={image.id}>
            <img className="h-full" src={image.src} alt={image.alt} />

            <Link href="/" passHref>
              <a href="portfolio">
                <div className="flex items-center justify-between pt-3">
                  <p>{image.alt}</p>
                  <img
                    className="h-6 w-6"
                    src="/svg/arrow-right-solid.svg"
                    alt="right arrow"
                  />
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioCarousel;
