
const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/images/product1.png",
    offer: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/images/product2.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/images/product3.png",
    offer: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/images/product4.png",
    offer: "New",
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/images/product5.png",
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    image: "/images/product6.png",
    offer: "New",
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/images/product7.png",
    offer: "-50%",
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    image: "/images/product8.png",
    offer: "New",
  },
];

function Products() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Our Products
      </h2>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              {product.offer && (
                <span className="absolute right-4 top-4 rounded-full bg-red-400 px-3 py-2 text-sm text-white">
                  {product.offer}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="border border-amber-600 px-12 py-3 text-amber-700 hover:bg-amber-600 hover:text-white">
          Show More
        </button>
      </div>
    </section>
  );
}

export default Products;