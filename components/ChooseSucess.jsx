import Image from 'next/image';

const ChooseSucess = () => {
  return (
    <section className="bg-black py-6 text-white">
      {/* heading */}
      <div className="layout px-4 ">
        <div className="md:mr-1/2 md:w-3/5 lg:pr-12 xl:pr-16">
          <h1 className="text-2xl">
            When leading brands choose Shopify Plus, they choose us as their
            agency partner.
          </h1>
        </div>
      </div>

      <div className="flex flex-col pb-6 md:flex-row md:pb-16">
        {/* left section */}
        <div className="md:w-3/5">
          <div className="md:mt-40 md:w-3/4">
            <div className="relative mx-auto h-80 w-full md:max-w-7xl">
              <Image
                src="/images/HelloIMG1656733589209.jpeg"
                layout="fill"
                objectFit="contain"
                alt="agency partners"
              />
            </div>
          </div>
          {/* left section quote */}
          <div className="my-16 space-y-8 px-8 md:mt-28 md:w-3/5 md:px-0">
            <p className="relative text-xl">
              <span className="absolute top-0 left-0 -mt-1 -ml-4 text-4xl">
                &ldquo;
              </span>
              One of the most successful e‑commerce agencies on the planet.
              <span className="absolute text-4xl">&rdquo;</span>
            </p>
            <p className=" opacity-60">Harley Finkelstein, COO, Shopify</p>
          </div>
        </div>

        {/* right section */}
        <div className="md:w-2/5">
          <div className="relative h-[30rem] md:h-full md:max-w-7xl">
            <Image
              src="/images/HelloIMG1656733591420.jpeg"
              layout="fill"
              objectFit="cover"
              alt="agency partners"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSucess;
