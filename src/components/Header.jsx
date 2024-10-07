import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20"
      >
        <NavLink to="/">Guilherme Oliveira</NavLink>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <NavLink to="about" onClick={closeNav}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" onClick={closeNav}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={closeNav}>
                Contact
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
