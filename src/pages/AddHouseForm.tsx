import React, { useState } from "react";

export default function AddHouseForm() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New house submitted:", form);
    alert("Form submitted (you can now connect this to your backend)");
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">Add New House</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
