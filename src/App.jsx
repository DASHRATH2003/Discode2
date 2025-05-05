import { Outlet, Link } from 'react-router-dom';


function App() {
  return (
    <>
      {/* Navigation Bar with Logo */}
      <nav className="bg-gray-800 p-4 text-white w-full z-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-8">
          {/* Logo (Codedisu) */}
          <div className="flex items-center">
            {/* <img
              src="https://via.placeholder.com/40?text=Codedisu" // Replace with your logo URL
              alt="Codedisu Logo"
              className="w-10 h-10 rounded-full"
            /> */}
            <span className="text-xl font-semibold ml-2">Codedisu</span>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center flex-grow gap-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/blog" className="hover:text-gray-300">Blog</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to ="/register" className='hover:text-gray-300'>Register</Link>
           

           
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content without extra padding */}
      <main> 
        <Outlet />

      </main>
    </>
  );
}

export default App;
