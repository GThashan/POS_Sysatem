import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home"
import Customer from "./Components/Customer";
import Product from "./Components/Product";
import Order from "./Components/Order";
import Login from "./Components/login";
import SignUp from "./Components/signUp";

function App() {


  return (
    <Router>
  <div className="bg-[#2d1e1e] text-white p-4">
  <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
     
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="https://img.freepik.com/free-vector/gradient-transport-logo-template_23-2151353006.jpg?ga=GA1.2.1430070741.1713762896&semt=ais_hybridhttps://static.vecteezy.com/system/resources/previews/010/138/459/non_2x/pos-letter-technology-logo-design-on-white-background-pos-creative-initials-letter-it-logo-concept-pos-letter-design-vector.jpg" alt="Logo" className="h-10 w-10" /> 
            </Link>
          </div>

         
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-700 hover:text-[#9f7425] font-medium">
              Home
            </Link>
            <Link to="/customer" className="text-gray-700 hover:text-[#9f7425] font-medium">
              Customer
            </Link>
            <Link to="/product" className="text-gray-700 hover:text-[#9f7425] font-medium">
              Products
            </Link>
            <Link to="/order" className="text-gray-700 hover:text-[#9f7425] font-medium">
              Order Manage
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-[#9f7425] font-medium">
              Login
            </Link>
          </div>

      
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#9f7425] focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/order"   element={<Order/>}/>
        <Route path="/login"   element={<Login/>}/>
        <Route path="/signUp"   element={<SignUp/>}/>
      </Routes>
    
  </div>
  </Router>
  )
}

export default App
