import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header flex justify-between items-center px-6 md:px-12 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50'>
      <NavLink to='/'>
        <button className='w-18 h-18 object-contain'>M</button>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;