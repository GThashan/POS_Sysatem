import  { useState } from 'react';

const Customertable = () => {

  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', address: '123 Main St', salary: '50000' },
    { id: 2, name: 'Jane Smith', address: '456 Oak St', salary: '60000' },
    { id: 3, name: 'Alice Johnson', address: '789 Pine St', salary: '55000' },
    { id: 4, name: 'John Doe', address: '123 Main St', salary: '50000' },
    { id: 5, name: 'Jane Smith', address: '456 Oak St', salary: '60000' },
    { id: 6, name: 'Alice Johnson', address: '789 Pine St', salary: '55000' },
  ]);


  const handleEdit = (index: number) => {
    const customer = customers[index];
    alert(`Edit Customer: ${customer.name}`);
   
  };


  const handleDelete = (id: number) => {
    const filteredCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(filteredCustomers);
  };

  return (
    <>
      <div className='p-6'>
        <h3 className="text-xl font-semibold mb-4">Customer List</h3>
        <table className="min-w-full  border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Salary</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <td className="px-4 py-2 border">{customer.name}</td>
                <td className="px-4 py-2 border">{customer.address}</td>
                <td className="px-4 py-2 border">{customer.salary}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(customer.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customertable;
