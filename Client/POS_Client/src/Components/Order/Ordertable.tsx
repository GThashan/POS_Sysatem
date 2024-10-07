import { useState } from 'react';


function Ordertable(){
    const [products, setProducts] = useState([
        { id: 1, productName: 'Product 1', quantityOnHand: 123, unitPrice: 50000 },
        { id: 2, productName: 'Product 2', quantityOnHand: 456, unitPrice: 60000 },
        { id: 3, productName: 'Product 3', quantityOnHand: 789, unitPrice: 55000 }
      ]);
    return(
        <div className='p-6'>
        <h3 className="text-xl font-semibold mb-4">Product List</h3>
        <table className="min-w-full  border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Quantity on Hand</th>
              <th className="px-4 py-2 border">Unit Price</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{product.productName}</td>
                <td className="px-4 py-2 border">{product.unitPrice}</td>
                <td className="px-4 py-2 border">{product.quantityOnHand}</td>
                <td className="px-4 py-2 border">25000.00</td>
               
                <td className="px-4 py-2 border">
                
                  <button
                    
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                  >
                    Remove
                  </button>
                
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}


export default Ordertable;