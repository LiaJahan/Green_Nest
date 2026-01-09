import React, { useEffect, useState } from "react";

const TopRatedPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl text-green-800 font-bold text-center mb-12">
        Our Top Rated Plants
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition"
          >
            <figure className="h-52">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="h-full w-full object-cover"
              />
            </figure>

            <div className="card-body text-center">
              <h2 className="card-title justify-center text-green-800">
                {plant.plantName}
              </h2>

              <p className="text-lg font-semibold">
                Price: ${plant.price}
              </p>

              <p className="text-yellow-600 font-medium">
                ⭐ Rating: {plant.rating}
              </p>

              <div className="card-actions justify-center mt-4">
                <button className="btn bg-green-700 text-white hover:bg-green-800">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedPlants;
