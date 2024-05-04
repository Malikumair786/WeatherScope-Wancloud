import React, { useState } from "react";
import favicon from "assets/favicon.png";
import "./Header.css";

import { Link } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Search", link: "/weather-lookup" },
    { text: "About", link: "/" },
    { text: "Contact", link: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-primary py-2">
        <div className="flex justify-between">
          <Link to="/">
            <div className="flex items-center ml-10 cursor-pointer">
              <img src={favicon} alt="Logo" className="h-12 w-12" />
            </div>
          </Link>

          <nav className="hidden md:flex gap-4">
            {menuItems.map(({ text, link }) => (
              <Link
                key={text}
                to={link}
                className="flex items-center gap-2 relative hover-trigger text-xl text-white cursor-pointer hover:text-gray-300"
              >
                {text}
                <div className="underline-animation"></div>
              </Link>
            ))}
          </nav>

          <div className="flex md:hidden items-center mr-10">
            <MenuIcon
              onClick={toggleMenu}
              className="text-white cursor-pointer"
            />
          </div>

          <div className="hidden md:flex items-center mr-10">
            <NotificationsOutlinedIcon className="text-white" />
          </div>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? "flex" : "hidden"
          } flex-col items-center py-4`}
        >
          {menuItems.map(({ text, link }) => (
            <Link
              key={text}
              to={link}
              className="text-xl text-white cursor-pointer hover:text-gray-300 my-2"
            >
              {text}
              <div className="underline-animation"></div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto h-[1px] bg-[#125f63] sm:block"></div>
    </>
  );
};

export default Header;
