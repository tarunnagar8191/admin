import  { useState } from 'react';
import { privateRequest } from '../../configs/RequestMethod';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    mobileNo: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await privateRequest.post('/users/login', formData);
      console.log('Response from API:', response.data);
      navigate('/otp-validate')
      // You can add further actions like redirecting to dashboard here
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img src="./images/login.png" alt="Login" className="h-[20rem]" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNo">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick= {handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
