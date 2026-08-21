import  { Link, useNavigate } from 'react-router-dom';

const Navbar  = ()  =>  {
  const navigate  = useNavigate();

  const token = localStorage.getItem('token');

  const onLogout  = ()  => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return  (
  <nav className="bg-white  shadow-md border-b  border-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex  justify-between items-center  h-16">
        <Link to="/"  className="text-2xl font-bold text-blue-600 tracking-tight">
        Charity <span className="text-gray-800">Platform</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/campaigns" className="text-gray-600  font-medium hover:text-blue-600 transition  duration-300">
          Jelajahi Kampanye
          </Link>
          
          {token? (
          <button
            onClick={onLogout}
            className="bg-red-50  text-red-600  font-bold py-2  px-4  rounded-lg  hover:bg-red-100  transition  duration-300"
            >
            Keluar
            </button>
          ) : (
          <div className="flex  space-x-2">
            <Link
                to="/login "
                className="bg-transparent text-blue-600 font-bold py-2  px-4  rounded-lg  hover:bg-blue-50  transition  duration-300"
                >
                Masuk
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600  text-white  font-bold py-2  px-4  rounded-lg  hover:bg-blue-700 transition  duration-300"
                  >
                  Daftar
                </Link>
          </div>
          )}
        </div>

      </div>
    </div>
  </nav>
  );
};

export  default Navbar;
