
function TipsTricks() {
  return (
    <section className="bg-[#FCF8F3] py-16 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h2>

          <p className="mt-4 text-gray-500">
            Our designer already made a lot of beautiful
            prototype of rooms that inspire you.
          </p>

          <button className="mt-6 bg-[#B88E2F] px-8 py-3 text-white">
            Explore More
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/room1.png"
            alt="Bedroom inspiration"
            className="h-80 w-full object-cover"
          />

          <img
            src="/images/room2.png"
            alt="Dining room inspiration"
            className="h-80 w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default TipsTricks;