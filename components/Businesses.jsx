/* eslint-disable @next/next/no-img-element */

import { businesses, moreBusinesses } from '../constants/data';

const Businesses = () => {
  return (
    <section className=" bg-black text-white">
      <div className="layout">
        <h1 className="py-10 pr-5 text-2xl md:px-10 md:py-20 lg:w-2/3 lg:lg:text-5xl">
          We develop and grow e‑commerce stores for some of the best in the
          business.
        </h1>
        {/* businesses grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left side grid */}
          <div className="grid grid-cols-2 md:mr-8 md:grid-cols-3 lg:mr-0 lg:grid-cols-4">
            {businesses.map((business) => {
              return (
                <img
                  className="p-6 md:p-3"
                  key={business.id}
                  src={business.src}
                  alt={business.alt}
                />
              );
            })}
          </div>

          {/* right side grid */}
          <div className="md:border-l-[0.5px]">
            <div className="flex flex-col md:items-center">
              <h2 className="my-7 text-xs opacity-60 lg:text-base">
                A FEW MORE
              </h2>
              <ul className="space-y-2 text-sm lg:text-base">
                {moreBusinesses.map((business) => {
                  return <li key={business.id}>{business.title}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Businesses;
