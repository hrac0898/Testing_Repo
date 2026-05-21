import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold text-slate-900">
          MERN Shop
        </Link>
        <nav className="flex items-center gap-4 text-slate-600">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link to="/cart" className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
