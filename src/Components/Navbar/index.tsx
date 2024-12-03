import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://https://dealroom.co"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEUVLFUVLFUHJVERKVRTXnkzRGYACEQAHk7///+ip7Tv8PK2u8XN0NYfNVxmcIZ7g5WAh5iCiZoVLFXUf3GFAAAAE3RSTlPX///////////////////////W8ujAeAAAAJBJREFUeAHE0FUCxCAQA9AygUxd7n/ZJXX93uC8KkURPvNtyv/RFLwjopLob+jlksrxjWVtuKCRFDZVq55ntJi3utx6Ump4RctTDRuaOw+EhsGFstg0TTowadjQx7w60ActseFwRnqd/4XhDdu2XF75gksqhh2nK7aRl7NFwNIDRlo4ofaWpvw24GmIvCQvBAB3rAmG+uT6hQAAAABJRU5ErkJggg=="
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dealroom
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              to={{
                pathname: '/Companies',
              }}
            >
              <li>
                <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                    Companies
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
