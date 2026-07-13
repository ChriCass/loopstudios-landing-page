import logo from "../assets/images/logo.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";

const navLinks = ["About", "Careers", "Events", "Products", "Support"];

const socialLinks = [
  { icon: iconFacebook, label: "Facebook", href: "#" },
  { icon: iconTwitter, label: "Twitter", href: "#" },
  { icon: iconPinterest, label: "Pinterest", href: "#" },
  { icon: iconInstagram, label: "Instagram", href: "#" },
];

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <a href="#" aria-label="Loopstudios home">
              <img src={logo} alt="Loopstudios" className="h-6" />
            </a>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
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
            </nav>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-end">
            <ul className="flex gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="group"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-6"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-400">
              &copy; {currentYear} Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
