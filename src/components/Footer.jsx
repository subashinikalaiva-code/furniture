
function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">Furniro.</h2>
          <p className="mt-8 text-sm leading-6 text-gray-400">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-gray-400">Links</h3>
          <ul className="space-y-6 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-gray-400">Help</h3>
          <ul className="space-y-6 text-sm">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-gray-400">Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full border-b border-gray-400 py-2 text-sm outline-none"
            />
            <button className="border-b border-black text-xs font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-gray-200 pt-6 text-sm">
        2023 furino. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;