'use client'

import { useState } from 'react';
import userRegister from '@/libs/userRegister';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        password: ''
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await userRegister(formData);
            window.location.href = '/api/auth/signin';
        } catch (error) {
            console.error(error);
            alert("Failed to register user")
        }
    };

    return (
        <main className="h-full w-full m-5 p-5">
            <div>
                <h1 className="text-3xl text-center my-10 font-bold">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="text-xl text-blue-700 ml-20">Register User</div>
                    <div className="flex items-center w-1/2 my-2 ml-20" onChange={handleChange}>
                        <label className="w-auto block test-gray-700 pr-4" htmlFor="name">
                            Name</label>
                        <input type="text" required id="name" name="name" placeholder='Name'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className="flex items-center w-1/2 my-2 ml-20" onChange={handleChange}>
                        <label className="w-auto block test-gray-700 pr-4" htmlFor="email">
                            Email</label>
                        <input type="text" required id="email" name="email" placeholder='Email'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className="flex items-center w-1/2 my-2 ml-20" onChange={handleChange}>
                        <label className="w-auto block test-gray-700 pr-4" htmlFor="tel">
                            Tel.</label>
                        <input type="text" required id="tel" name="tel" placeholder='012-345-6789'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className="flex items-center w-1/2 my-2 ml-20" onChange={handleChange}>
                        <label className="w-auto block test-gray-700 pr-4" htmlFor="password">
                            Password</label>
                        <input type="password" required id="password" name="password" placeholder='Minimum 6 characters'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    
                    <button type="submit" className="bg-blue-500 hover:bg-bluue-700
                    text-white p-2 rounded ml-20">Register</button>
                </form>
            </div>
        </main>
    );
}
