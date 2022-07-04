import Link from 'next/link';
import { citiesA, citiesB, resources, social } from '../constants/data';

const Footer = () => {
  return (
    <div className="border-t-[1px] border-black/10 bg-white text-black">
      <div className="layout">
        <div className="grid grid-cols-2 gap-y-8 py-10 text-sm font-semibold md:grid-cols-4 md:text-base">
          <span>
            London <br />
            90/92 Pentonville Rd <br />
            London <br />
            N1 9HS <br />
            UK
          </span>
          <span>
            New York <br />
            114 W 26th St, Floor 2 <br />
            New York <br />
            10001 <br />
            USA
          </span>
          <ul className="space-y-6">
            {citiesA.map((item) => {
              return <li key={item.id}>{item.city}</li>;
            })}
          </ul>
          <ul className="space-y-6">
            {citiesB.map((item) => {
              return <li key={item.id}>{item.city}</li>;
            })}
          </ul>
          <ul className="space-y-4">
            {resources.map((item) => {
              return (
                <li key={item.id}>
                  <Link href="/" passHref>
                    <a
                      href="projects"
                      className="hover:border-red-600 hover:text-red-600 hover:underline hover:underline-offset-8"
                    >
                      {item.link}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="space-y-4">
            {social.map((item) => {
              return (
                <li key={item.id}>
                  <Link href="/" passHref>
                    <a
                      href="projects"
                      className="hover:border-red-600 hover:text-red-600 hover:underline hover:underline-offset-8"
                    >
                      {item.link}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-y-8 py-10 text-sm font-semibold opacity-60 md:grid-cols-4 md:text-base">
          <Link href="/" passHref>
            <a
              href="github"
              className="col-span-2 hover:border-red-600 hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              © 2022 Antonio Lopez
            </a>
          </Link>
          <span>Privacy Policy</span>
          <span>Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
