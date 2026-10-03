
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white max-w-6xl mx-auto">

      {/* Logo */}
      <h1 className="text-xl font-bold text-black">
        Furniro
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 text-sm font-medium">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 text-base">
        <FaUser />
        <FaSearch />
        <FaHeart />
        <FaShoppingCart />
      </div>

    </nav>
  );
}

export default Navbar;