import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    function changeHandler(event) {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        console.log(formData);
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-6 mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
            <label className="w-full">
                <p className="text-lg text-white mb-2">Email Address<sup className="text-pink-200">*</sup></p>
                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                />
            </label>

            <label className="w-full relative">
                <p className="text-lg text-white mb-2">Password<sup className="text-pink-200">*</sup></p>
                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                    className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                />
                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
                <Link to="#" className="text-sm mt-2 text-blue-300 hover:underline">Forgot Password?</Link>
            </label>

            <button className="bg-blue-600 hover:bg-blue-500 py-2 rounded-md mt-4 font-medium text-white transition duration-200">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
