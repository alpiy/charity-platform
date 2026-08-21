import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import  axios from  'axios';

const Login = ()  =>  {
  const [formData,  setFormData]  = useState({
    email:  '',
    password: '',
  });

  const { email,  password  } = formData;
  const navigate  = useNavigate();

  const onChange  = (e) =>  {
    setFormData((prevState) =>  ({
      ...prevState,
      [e.target.name]:  e.target.value,
    }));
  };

  const onSubmit  = async (e) =>  {
    e.preventDefault();
    try {
      const response  = await axios.post('/api/auth/login', {
        email,
        password
      });

      console.log('Login Sukses:',  response.data);

      localStorage.setItem('token', response.data.token);

      navigate('/campaigns');
    } catch (error) {
      const errorMessage  = error.response?.data?.message ||  'Terjadi Kesalahan pada server';
      console.error('Login Gagal:', errorMessage);
      alert('Login Gagal: ' + errorMessage);
    }
  };

  return  (
    <div className="flex justify-center items-center  h-[80vh]">
      <div className="bg-white  p-8 rounded-lg  shadow-md w-full  max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">Masuk ke Akun Anda</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              value={email}
              onChange={onChange}
              className="w-full px-3  py-2  border  rounded-lg  focus:outline-none  focus:border-blue-500"
              placeholder="Masukkan email anda"
              required
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              value={password}
              onChange={onChange}
              className="w-full px-3  py-2 border rounded-lg  focus:outline-none  focus:border-blue-500"
              placeholder="Masukkan password anda"
              required
              />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white  font-bold py-2  px-4  rounded-lg  hover:bg-blue-700 transition  duration-300"
          >
            Masuk
          </button>
        </form>
        
        <p className="mt-4  text-center text-sm text-gray-600">
          Belum punya akun? <Link to="/register" className="text-blue-500 hover:underline">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
