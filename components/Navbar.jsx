const Navbar = () => {
  return (
    <nav className="layout text-white">
      <div className="flex justify-between py-10 px-6 text-sm font-bold italic">
        <span>WE MAKE WEBSITES</span>
        {/* <img src="/svg/logo.svg" alt="WE MAKE WEBSITES" /> */}
        <img className="h-5 w-5" src="/svg/bars-solid.svg" alt="menu bars" />
      </div>
    </nav>
  );
};
export default Navbar;
