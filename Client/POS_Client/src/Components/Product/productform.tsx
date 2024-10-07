import React, { useState } from 'react';

function ProductForm() {
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [qoh, setQoh] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log the product details
    console.log({
      name,
      unitPrice,
      qoh,
      productImage,
      productDescription,
    });

    // Reset form fields
    setName('');
    setUnitPrice('');
    setQoh('');
    setProductImage('');
    setProductDescription('');
  };

  return (
    <div className="mx-auto shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="unitPrice" className="block text-white font-medium mb-2">
              Unit Price
            </label>
            <input
              type="text"
              id="unitPrice"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter unit price"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="qoh" className="block text-white font-medium mb-2">
              Quantity On Hand
            </label>
            <input
              type="number"
              id="qoh"
              value={qoh}
              onChange={(e) => setQoh(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter quantity on hand"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="productImage" className="block text-white font-medium mb-2">
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              accept="image/*" // Accept only image files
        
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          
        </div>
        <div className="mb-4">
            <label htmlFor="productDescription" className="block text-white font-medium mb-2">
              Product Description
            </label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter product description"
            />
          </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
