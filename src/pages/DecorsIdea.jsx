import imgN1 from "/images/n1.webp";
import imgN2 from "/images/n2.jpg";
import imgN3 from "/images/n3.jpg";
import imgN4 from "/images/n4.jpg";
import imgN5 from "/images/n5.jpg";
import imgN6 from "/images/n6.jpg";


const DecorsIdea = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-800 font-bold text-center mb-10">
        Style Your Space the Sustainable Way
      </h1>

      <div className="carousel rounded-box gap-4">
        {[imgN1, imgN2, imgN3, imgN4, imgN5, imgN6].map(
          (img, index) => (
            <div key={index} className="carousel-item">
              <img
                src={img}
                alt="Eco-friendly plant decor"
                className="h-72 w-50 object-cover rounded-xl shadow-md"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default DecorsIdea;
