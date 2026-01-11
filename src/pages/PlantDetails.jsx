// src/pages/PlantDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  // Fetch plant data from public/plants.json
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.plantId === parseInt(id));
        setPlant(found);
      });
  }, [id]);

  if (!plant) {
    return <p className="text-center mt-20">Loading plant details...</p>;
  }

  // Form handlers
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      {/* Plant Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 space-y-3">
          <h1 className="text-4xl font-bold text-green-800">{plant.plantName}</h1>
          <p className="text-lg">{plant.description}</p>
          <p>
            <span className="font-bold">Category:</span> {plant.category}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${plant.price}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {plant.rating} ⭐
          </p>
          <p>
            <span className="font-bold">Stock:</span> {plant.availableStock}
          </p>
          <p>
            <span className="font-bold">Care Level:</span> {plant.careLevel}
          </p>
          <p>
            <span className="font-bold">Provider:</span> {plant.providerName}
          </p>
        </div>
      </div>

      {/* Book Consultation Form */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          Book Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="input w-full"
          />
          <button type="submit" className="btn btn-green w-full">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
