
const galleryImages = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
  "/images/gallery5.png",
  "/images/gallery6.png",
  "/images/gallery7.png",
  "/images/gallery8.png",
];

function Gallery() {
  return (
    <section className="py-8 max-w-5xl mx-auto">

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Share your setup with
        </p>

        <h2 className="mt-1 text-2xl font-bold text-gray-800">
          #FuniroFurniture
        </h2>
      </div>

      <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-2 px-4 sm:grid-cols-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Furniture setup ${index + 1}`}
            className="h-32 w-full rounded object-cover sm:h-40"
          />
        ))}
      </div>

    </section>
  );
}

export default Gallery;