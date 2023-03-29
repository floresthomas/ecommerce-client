import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 p-10 bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="mb-5">
            <h4 className="text-2xl pb-4">Company</h4>
            <p className="text-gray-500">
              A123 Lost Street <br />
              Chandigarh, PB 234233 <br />
            </p>
          </div>
          <div className="mb-5">
            <h4>Useful Links</h4>
            <ul className="text-gray-500">
              <li className="pb-4">
                <a href="#" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:text-yellow-500">
                  About us
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:text-yellow-500">
                  Services
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:text-yellow-500">
                  Terms of Services
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:text-yellow-500">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h4>Join our Newsletter</h4>
            <form className="flex flex-row flex-wrap">
              <input
                className="text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                placeholder="email@example.com"
                type="text"
                name=""
                id=""
              />
              <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
