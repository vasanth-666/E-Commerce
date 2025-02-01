import React, { useState } from 'react';
import upload_icon from '../assets/upload_icon.png';
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
      formData.append("popular", popular ? true : false);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(`${backend_url}/api/product/add`, formData, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);

        // ✅ Reset form after submission
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
    <form onSubmit={onSubmitHandler} className='px-8 py-6'>
      <div className='flex flex-col gap-y-4 text-lg font-medium'>
        <h3 className='text-2xl text-secondary mb-4'>Upload Product Images</h3>

        <div className='flex gap-4'>
          {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                src={
                  [image1, image2, image3, image4][index]
                    ? URL.createObjectURL([image1, image2, image3, image4][index])
                    : upload_icon
                }
                alt=""
                className='w-20 h-20 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all'
              />
              <input type="file" onChange={(e) => setImage(e.target.files[0])} id={`image${index + 1}`} hidden />
            </label>
          ))}
        </div>

        <div>
          <h5 className='text-xl'>Product Name</h5>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Product Name' className='input-field' />
        </div>
        <div>
          <h5 className='text-xl'>Product Description</h5>
          <textarea rows={5} onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Product Description' className='input-field' />
        </div>

        <div className='flex flex-col sm:flex-row gap-6'>
          <div>
            <h5 className='text-xl'>Category</h5>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className='input-select'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <h5 className='text-xl'>Sub Category</h5>
            <select onChange={(e) => setSubCategory(e.target.value)} value={subcategory} className='input-select'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <h5 className='text-xl'>Product Price</h5>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Price' className='input-field' />
          </div>
        </div>

        <div>
          <h5 className='text-xl'>Product Sizes</h5>
          <div className='flex gap-4 mt-2'>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                <span className={`${sizes.includes(size) ? "bg-tertiary text-white" : "bg-white"} text-gray-700 rounded-md ring-1 ring-gray-300 px-4 py-2 cursor-pointer transition-all hover:bg-tertiary hover:text-white`}>
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-2 my-4'>
          <input 
            type='checkbox' 
            onChange={(e) => {
              setPopular(e.target.checked)
              console.log(e.target.checked)
            }} 
            checked={popular} 
            id='popular' 
          />
          <label htmlFor="popular" className='cursor-pointer text-lg'>Add to Popular</label>
        </div>

        <button type='submit' className='btn-dark'>Add Product</button>
      </div>
    </form>
  );
};

export default Add;
