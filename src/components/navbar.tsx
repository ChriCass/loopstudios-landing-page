import { useState, useRef } from "react";
import logo from "../assets/images/logo.svg";
import hamburgerLogo from "../assets/images/icon-hamburger.svg";
import MenuMobile from "./ui/menuMobile";

const navLinks = ["About", "Careers", "Events", "Products", "Support"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <header>
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex justify-between items-center py-8">
          <a href="#" aria-label="Loopstudios home">
            <img src={logo} alt="Loopstudios" className="h-6" />
          </a>
          <nav aria-label="Main navigation">
            <ul className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white hover:underline underline-offset-8 focus-visible:outline-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <button
              ref={hamburgerRef}
              className="md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={isOpen ? handleClose : handleOpen}
            >
              <img
                src={hamburgerLogo}
                alt=""
                aria-hidden="true"
                className="h-6"
              />
            </button>
          </nav>
        </div>
      </div>

      <MenuMobile
        isOpen={isOpen}
        onClose={handleClose}
        navLinks={navLinks}
      />
    </header>
  );
};

export default Navbar;
