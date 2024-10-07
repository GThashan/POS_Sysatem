function OrderForm() {
  return (
    <div className=" mx-auto shadow-md rounded-lg p-6">
      <form>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Select Customer
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Select Customer"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-white font-medium mb-2"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Customer Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-white font-medium mb-2"
            >
              Customer Address
            </label>
            <input
              type="number"
              id="salary"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Customer Address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-white font-medium mb-2"
            >
              Customer Address
            </label>
            <input
              type="String"
              id="salary"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 disabled={true}"
              placeholder="Enter Customer Address"
              required
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Select Product
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Select Product"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-white font-medium mb-2"
            >
              Product Description
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Product Description"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-white font-medium mb-2"
            >
              Unit Price
            </label>
            <input
              type="number"
              id="salary"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter  Unit Price"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-white font-medium mb-2"
            >
              QTH on hand
            </label>
            <input
              type="String"
              id="salary"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 disabled={true}"
              placeholder="Enter  QTH on hand"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-white font-medium mb-2"
            >
              QTH
            </label>
            <input
              type="String"
              id="salary"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 disabled={true}"
              placeholder="Enter  QTH "
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
}

export default OrderForm;
