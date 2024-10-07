import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-[90vh] mx-auto shadow-md rounded-lg p-6">
      <form>
        <div className="sm:w-[40%] md:w-[50%] mx-auto bg-white p-6 rounded-lg">
          <h1 className="text-center text-[30px] font-bold text-black">
            Login In Here
          </h1>

          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-medium mb-2">
              Email Address
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-black font-medium mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mx-auto bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <p className="text-center py-4 text-black">
            Don't have an account ?{" "}
            <Link to="/signUp" className="text-blue-700">
              Sign UP
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
