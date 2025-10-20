import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/blog');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold">
            St
          </Link>

          {!isBlogPage && (
            <>
              <div className="hidden lg:block">
                <nav>
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        href="#about"
                        className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#skills"
                        className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="px-6 py-1 bg-white text-black rounded-full transition-all duration-300 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <button
                className="block lg:hidden text-white"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </>
          )}
        </div>

        {!isBlogPage && (
          <nav
            className={`lg:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 -translate-y-full invisible'
            }`}
          >
            <ul className="pt-4 pb-8 space-y-4 container mx-auto px-4">
              <li>
                <a
                  href="#about"
                  className="block text-white relative group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 block px-4 py-2">About</span>
                  <span className="absolute left-0 bottom-0 w-full h-0 bg-white/10 transition-all duration-300 group-hover:h-full -z-0"></span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-white relative group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 block px-4 py-2">Projects</span>
                  <span className="absolute left-0 bottom-0 w-full h-0 bg-white/10 transition-all duration-300 group-hover:h-full -z-0"></span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block text-white relative group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 block px-4 py-2">Skills</span>
                  <span className="absolute left-0 bottom-0 w-full h-0 bg-white/10 transition-all duration-300 group-hover:h-full -z-0"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-white relative group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 block px-4 py-2">Contact</span>
                  <span className="absolute left-0 bottom-0 w-full h-0 bg-white/10 transition-all duration-300 group-hover:h-full -z-0"></span>
                </a>
              </li>
              <li className="mt-6 pt-6 border-t border-white/20">
                <Link
                  to="/blog"
                  className="block text-center text-black bg-white mx-4 px-6 py-3 rounded-full hover:bg-zinc-200 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}