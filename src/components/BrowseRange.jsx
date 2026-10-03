
function BrowseRange() {
  return (
    <section className="py-8 px-4 text-center max-w-5xl mx-auto">

      <h2 className="text-2xl font-bold text-gray-800">
        Browse The Range
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">

        <div>
          <img
            src="/images/dining.png"
            alt="Dining"
            className="w-full h-52 object-cover rounded-lg"
          />
          <h3 className="mt-3 text-lg font-semibold">
            Dining
          </h3>
        </div>

        <div>
          <img
            src="/images/living.png"
            alt="Living"
            className="w-full h-52 object-cover rounded-lg"
          />
          <h3 className="mt-3 text-lg font-semibold">
            Living
          </h3>
        </div>

        <div>
          <img
            src="/images/bedroom.png"
            alt="Bedroom"
            className="w-full h-52 object-cover rounded-lg"
          />
          <h3 className="mt-3 text-lg font-semibold">
            Bedroom
          </h3>
        </div>

      </div>
    </section>
  );
}

export default BrowseRange;