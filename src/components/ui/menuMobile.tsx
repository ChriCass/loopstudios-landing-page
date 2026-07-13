import { useEffect, useState, useRef } from "react";
import logo from "../../assets/images/logo.svg";
import closeIcon from "../../assets/images/icon-close.svg";

type MenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
  navLinks: string[];
};

const MenuMobile = ({ isOpen, onClose, navLinks }: MenuMobileProps) => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          closeBtnRef.current?.focus();
        });
      });
    } else {
      setAnimate(false);
      document.body.style.overflow = "";
      closeTimer.current = setTimeout(() => setVisible(false), 400);
    }
    return () => {
      document.body.style.overflow = "";
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`fixed inset-0 z-50 bg-black flex flex-col md:hidden transition-opacity duration-[400ms] ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl px-4 mx-auto w-full">
        <div className="flex justify-between items-center py-8">
          <a href="#" aria-label="Loopstudios home" tabIndex={-1}>
            <img src={logo} alt="Loopstudios" className="h-6" />
          </a>
          <button
            ref={closeBtnRef}
            aria-label="Close menu"
            onClick={onClose}
          >
            <img src={closeIcon} alt="" aria-hidden="true" className="h-6" />
          </button>
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="flex-1 flex items-center">
        <div className="max-w-7xl px-4 mx-auto">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <li
                key={link}
                className={`transition-all duration-500 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a
                  href="#"
                  className="text-white text-2xl uppercase hover:underline underline-offset-8 focus-visible:outline-white"
                  onClick={onClose}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;
