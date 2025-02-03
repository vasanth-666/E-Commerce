import React, { useState } from 'react';
import axios from 'axios';
import { backend_url } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backend_url + '/api/user/admin', { email, password });

            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <section className='flex items-center justify-center min-h-screen bg-gray-50'>
            <div className='flex flex-col w-full sm:w-96 bg-white shadow-lg rounded-xl overflow-hidden p-8'>
                {/* Login Form */}
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-3xl font-semibold text-gray-700 mb-6'>Login</h3>
                    <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-y-6'>
                        <div className='w-full'>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-600 mb-2'>
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='Enter your email'
                                value={email}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-600 mb-2'>
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='Enter your password'
                                value={password}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
