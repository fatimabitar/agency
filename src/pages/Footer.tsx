import logo from "../assests/logo.png";
import { navItems } from "../data";

const Footer = () => {
  return (
    <footer className="px-4 text-white mb-7">
      <div className="container flex flex-col lg:flex-row justify-between items-center h-24  mx-auto ">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#96ceb4] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          ))}
        </ul>

        <p>© 2020 Agency, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
