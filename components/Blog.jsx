import BlogCarousel from './BlogCarousel';

const Blog = () => {
  return (
    <section className=" bg-[#f0f0f0] text-black">
      <div className="layout">
        <h1 className="py-10 text-xl">
          Get ahead with the latest in e‑commerce and Shopify Plus.
        </h1>
        <div className="pb-5">
          <span className="border-b-2 border-black text-lg">
            Visit our blog
          </span>
        </div>
      </div>

      <BlogCarousel />
    </section>
  );
};

export default Blog;
