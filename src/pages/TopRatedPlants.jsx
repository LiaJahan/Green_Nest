import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRatedPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-5xl text-green-800 font-bold text-center mb-10">
        Our Top Rated Plants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-base-200 rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="h-48 object-cover rounded-md mb-4"
            />
            <h2 className="font-bold text-lg">{plant.plantName}</h2>
            <p>${plant.price}</p>
            <p>{plant.rating} ⭐</p>
            <Link
              to={`/plant/${plant.plantId}`}
              className="btn btn-green mt-auto"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPlants;
