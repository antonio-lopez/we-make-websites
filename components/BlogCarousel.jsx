/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { blogData } from '../constants/data';

const BlogCarousel = () => {
  return (
    <div className="carousel mx-auto max-w-screen-2xl">
      {blogData.map((data) => {
        return (
          <div className="carousel-item h-80 w-72" key={data.id}>
            <Link href="/" passHref>
              <a href="blog">
                <img
                  className="h-44 w-72 object-cover "
                  src={data.src}
                  alt={data.alt}
                />
              </a>
            </Link>
            <div className="flex h-full items-center justify-between pt-3 text-xs uppercase">
              <span>{data.date}</span>
              <span>{data.tag}</span>
            </div>
            <h1 className=" w-full border-b-2 border-black py-6">
              {data.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCarousel;
