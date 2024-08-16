import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          WebsiteName
        </div>
        <div>
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="text-white hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#profile" className="text-white hover:text-gray-300">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
