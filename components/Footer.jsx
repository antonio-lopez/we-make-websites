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
              return <li key={item.id}>{item.city}</li>;
            })}
          </ul>
          <ul className="space-y-4">
            {social.map((item) => {
              return <li key={item.id}>{item.city}</li>;
            })}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-y-8 py-10 text-sm font-semibold opacity-60 md:grid-cols-4 md:text-base">
          <span className=" col-span-2">
            © 2022 We Make Websites Ltd. A Tech Mahindra company.
          </span>
          <span>Privacy Policy</span>
          <span>Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
