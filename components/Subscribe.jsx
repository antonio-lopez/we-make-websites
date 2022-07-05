/* eslint-disable @next/next/no-img-element */
const Subscribe = () => {
  return (
    <section className="bg-white text-black">
      <div className="layout md:flex">
        <h1 className="mb-10 py-8 pr-8 text-2xl md:py-16">
          Be the first to hear about what’s hot in e‑commerce and Shopify Plus.
          Straight to your inbox.{' '}
        </h1>
        <div className="md:py-20">
          <form className="border-b-2 border-black/50 pb-5">
            <div className="flex justify-between">
              <input
                type="email"
                required
                className="text-xl opacity-50 focus:outline-none"
                placeholder="Enter Email"
              />
              <button type="submit">
                <img
                  className="h-6 w-6"
                  src="/svg/arrow-right-email.svg"
                  alt="arrow right"
                />
              </button>
            </div>
          </form>
          <p className="py-10 text-xs">
            By providing your email, you agree for us to contact you via email
            with e‑commerce advice. Your data is stored securely and we never
            pass it on to third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
