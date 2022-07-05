import Image from 'next/image';
import Link from 'next/link';
import { services } from '../constants/data';

const Services = () => {
  return (
    <section className="bg-black py-6 text-white">
      <div className="flex flex-col-reverse md:flex-row md:items-center">
        {/* left image section */}
        <div className="md:h-[32rem] md:w-3/5 md:pr-8">
          <div className="relative h-[32rem] md:h-full md:max-w-7xl">
            <Image
              src="/images/HelloIMG1656733591870.jpeg"
              layout="fill"
              objectFit="contain"
              alt="agency partners"
            />
          </div>
        </div>

        {/* right text section */}
        <div className="px-6 py-12 md:w-3/5 ">
          <div className="md:ml-1/6 lg:ml-1/5 my-8 px-0 md:w-4/6 md:px-0 lg:w-3/5">
            <h1 className="mb-4 text-2xl">Our e-commerce services</h1>
            <p className=" mb-6 opacity-60">
              Whether you&apos;re looking for a new online store, are migrating
              from another platform, or are needing ongoing support to optimize
              your existing website, we’ll make sure you get the most out of
              Shopify Plus. Here’s what services we offer.
            </p>
            <ul className="mb-8 xl:flex xl:flex-wrap">
              {services.map((service) => {
                return (
                  <li key={service.id} className="mb-4 pr-2 xl:mb-6 xl:w-1/2">
                    {service.title}
                  </li>
                );
              })}
            </ul>
            <div>
              <Link href="/" passHref>
                <a
                  href="services"
                  className="text-lg underline underline-offset-8 hover:border-red-600 hover:text-red-600"
                >
                  Shopify Plus services
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
