import React, { useState } from 'react';

function CustomerForm (){

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    console.log({ name, address, salary });

    
    setName('');
    setAddress('');
    setSalary('');
  };

  return (
    <div className=" mx-auto shadow-md rounded-lg p-6">
     
      <form onSubmit={handleSubmit}>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
   
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Customer Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter customer name"
            required
          />
        </div>

       
        <div className="mb-4">
          <label htmlFor="address" className="block text-white font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter customer address"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="salary" className="block text-white font-medium mb-2">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter customer salary"
            required
          />
        </div>
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
};

export default CustomerForm;
