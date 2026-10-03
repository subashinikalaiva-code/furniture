
function Hero() {
  return (
    <section className="bg-[#F9F1E7] max-w-6xl mx-auto min-h-[350px] flex items-center justify-end px-6 py-6">

      <div className="bg-[#FFF3E3] p-6 max-w-[350px] rounded-md">

        <p className="text-gray-600 tracking-widest text-xs mb-2">
          New Arrival
        </p>

        <h1 className="text-3xl font-bold text-[#B88E2F] mb-3">
          Discover Our New Collection
        </h1>

        <p className="text-gray-600 text-sm mb-4">
          Discover beautiful furniture for your home.
          Create a comfortable and stylish living space.
        </p>

        <button className="bg-[#B88E2F] text-white px-6 py-3 text-sm font-semibold">
          BUY NOW
        </button>

      </div>

    </section>
  );
}

export default Hero;