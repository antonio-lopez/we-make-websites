import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="layout flex items-center justify-between py-10 px-6 text-sm font-bold italic">
        <span>WE MAKE WEBSITES</span>
        <Image
          height={20}
          width={20}
          src="/svg/bars-solid.svg"
          alt="menu bars"
        />
      </div>
    </nav>
  );
};
export default Navbar;
