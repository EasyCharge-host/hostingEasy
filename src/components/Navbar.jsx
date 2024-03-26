import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Link to="/JC-Website/" className="font-bold flex items-center">
            <img
              src="/Logo.jpeg"
              alt="Logo"
              className="h-16 w-16 rounded-md object-cover mr-2"
            />
          </Link>
        </div>
        <div className="mt-4 md:mt-0 md:flex-grow md:flex md:items-center md:justify-center">
          <div className="flex flex-col md:flex-row md:items-center md:ml-2 md:gap-16 text-2xl">
            <Link
              className="nav-link md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline"
              to="/JC-Website/"
            >
              Startseite
            </Link>
            <Link
              className="nav-link md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline"
              to="/JC-Website/products"
            >
              Produkt
            </Link>
            <Link
              className="nav-link md:ml-4 mb-2 md:mb-0 hover:underline-offset-1 hover:underline"
              to="/JC-Website/about-us"
            >
              Über uns
            </Link>
            <Link
              className="nav-link md:ml-4 mb-2 md:mb-0 hover:underline-offset-8 hover:underline"
              to="/JC-Website/impressum"
            >
              Impressum
            </Link>
          </div>
          {/* Removed shopping cart section */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
