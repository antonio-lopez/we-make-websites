/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { mobileLinks } from '../constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="layout flex items-center justify-between py-10 px-6 text-sm font-bold italic">
        <div className="flex flex-col text-xl">
          <span>WE MAKE</span>
          <span className="ml-5">WEBSITES</span>
        </div>
        {/* mobile menu open icon */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`${isOpen ? 'hidden' : 'block'} h-7 w-7 lg:hidden`}
        >
          <img src="/svg/bars-solid.svg" alt="menu bars" />
        </button>

        {/* mobile menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute  top-0 left-0 z-20 min-h-screen w-full bg-black px-4 `}
        >
          {/* mobile menu close icon */}
          <div className="mt-14 flex min-h-screen w-full flex-col space-y-10">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className=" mr-5 h-7 w-7 self-end lg:hidden"
            >
              <img src="/svg/x-solid.svg" alt="close menu" />
            </button>

            {/* mobile links */}
            <ul className="ml-4 space-y-4 text-xl not-italic text-white">
              {mobileLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href="/" passHref>
                      <a href="link">{link.mobileLink}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* desktop links */}
        <ul className="hidden space-x-4 not-italic lg:flex lg:text-lg ">
          {mobileLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link href="/" passHref>
                  <a
                    className="hover:border-b-2 hover:border-red-600 hover:text-red-600"
                    href="link"
                  >
                    {link.mobileLink}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
