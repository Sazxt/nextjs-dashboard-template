"use client";
import React, { useState } from "react";
import { Lock, User, Mail } from "lucide-react";
import { useRouter } from 'next/navigation'

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    });
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isLogin ? "Login" : "Register", formData);
        if (isLogin) 
        {
            return router.push('/dashboard')
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
            {/* Animasi Background Blur */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-3xl animate-bg-move"></div>
                <div className="absolute w-96 h-96 bg-pink-400 opacity-50 rounded-full blur-3xl animate-bg-move left-1/3"></div>
                <div className="absolute w-72 h-72 bg-purple-400 opacity-50 rounded-full blur-3xl animate-bg-move right-1/3"></div>
            </div>

            {/* Card Login/Sign Up */}
            <div className="relative z-10 bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-md">
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {isLogin ? "Masuk" : "Daftar"}
                        </h2>
                        <p className="text-gray-500 mt-2">
                            {isLogin
                                ? "Selamat datang kembali! Silakan login."
                                : "Buat akun baru untuk memulai."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Nama Pengguna"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Kata Sandi"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                        </div>

                        {isLogin && (
                            <div className="flex justify-between items-center">
                                <label className="flex items-center text-gray-600">
                                    <input
                                        type="checkbox"
                                        className="mr-2 rounded text-blue-500 focus:ring-blue-400"
                                    />
                                    Ingat saya
                                </label>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                                >
                                    Lupa kata sandi?
                                </a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            {isLogin ? "Masuk" : "Daftar"}
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                            >
                                {isLogin ? "Daftar" : "Masuk"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
