import React, { useState } from 'react';
import upload_icon from '../assets/upload_icon.jpg';
import axios from 'axios';
import { backend_url } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubCategory] = useState("Topwear");
  const [popular, setPopular] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("popular", popular);
      formData.append("sizes", JSON.stringify(sizes));

      [image1, image2, image3, image4].forEach((img, index) => {
        if (img) formData.append(`image${index + 1}`, img);
      });

      const response = await axios.post(`${backend_url}/api/product/add`, formData, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setPopular(false);
        setSizes([]);
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <form onSubmit={onSubmitHandler} className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-xl space-y-8 border border-gray-200">
        <h3 className="text-3xl text-secondary font-bold text-center">Add New Product</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => (
            <label key={index} htmlFor={`image${index + 1}`} className="w-full h-32 relative cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-300 hover:border-secondary transition-all">
              <img
                src={
                  [image1, image2, image3, image4][index]
                    ? URL.createObjectURL([image1, image2, image3, image4][index])
                    : upload_icon
                }
                alt="Upload"
                className="object-cover w-full h-full max-w-full max-h-full"
              />
              <input type="file" onChange={(e) => setImage(e.target.files[0])} id={`image${index + 1}`} hidden />
            </label>
          ))}
        </div>

        <div>
          <label className="block text-lg font-semibold text-tertiary">Product Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Product Name"
            className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-tertiary">Product Description</label>
          <textarea
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Enter Product Description"
            className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-semibold text-tertiary">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-secondary"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-tertiary">Subcategory</label>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subcategory}
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-secondary"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-tertiary">Price ($)</label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Enter Price"
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold text-tertiary">Available Sizes</label>
          <div className="flex gap-3 mt-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <span
                key={size}
                onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                className={`px-4 py-2 rounded-md cursor-pointer border ${sizes.includes(size) ? 'bg-secondary text-white' : 'bg-white text-gray-700'} transition hover:bg-secondary hover:text-white`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            onChange={(e) => setPopular(e.target.checked)}
            checked={popular}
            id="popular"
            className="h-5 w-5 cursor-pointer"
          />
          <label htmlFor="popular" className="text-lg text-tertiary cursor-pointer">Mark as Popular</label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-tertiary transition-all text-xl font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
