import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currState, setCurrState] = useState("Login");
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          toast.success('Signup successful. Please log in.');
          setCurrState("Login");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full sm:w-[50%] lg:w-[40%] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex w-full items-center justify-center p-8">
          <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-full gap-y-6 text-gray-800">
            <div className="w-full mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full mt-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
              {currState === 'Sign Up' ? 'Sign Up' : 'Login'}
            </button>
            <div className="w-full flex flex-col gap-y-3 mt-6 text-sm text-center">
              {currState === 'Login' ? (
                <div className="text-gray-700">
                  Don't have an account?
                  <span onClick={() => setCurrState('Sign Up')} className="text-blue-500 cursor-pointer"> Create account</span>
                </div>
              ) : (
                <div className="text-gray-700">
                  Already have an account?
                  <span onClick={() => setCurrState('Login')} className="text-blue-500 cursor-pointer"> Login</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
