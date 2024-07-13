import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-6">
    <div className="flex gap-x-4">
        <label className="w-full">
            <p className="text-lg text-white mb-2">First Name<sup className="text-pink-200">*</sup></p>
            <input
                type="text"
                required
                placeholder="Enter First Name"
                onChange={changeHandler}
                value={formData.firstName}
                name="firstName"
                className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            />
        </label>

        <label className="w-full">
            <p className="text-lg text-white mb-2">Last Name<sup className="text-pink-200">*</sup></p>
            <input
                type="text"
                required
                placeholder="Enter Last Name"
                onChange={changeHandler}
                value={formData.lastName}
                name="lastName"
                className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            />
        </label>
    </div>

    <label className="w-full">
        <p className="text-lg text-white mb-2">Email Address<sup className="text-pink-200">*</sup></p>
        <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            name="email"
        />
    </label>

    <div className="flex gap-x-4">
        <label className="w-full relative">
            <p className="text-lg text-white mb-2">Create Password<sup className="text-pink-200">*</sup></p>
            <input
                type={showCreatePass ? "text" : "password"}
                required
                placeholder="Enter Password"
                onChange={changeHandler}
                value={formData.password}
                name="password"
                className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            />
            <span onClick={() => setShowCreatePass(!showCreatePass)} className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer">
                {showCreatePass ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
        </label>

        <label className="w-full relative">
            <p className="text-lg text-white mb-2">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input
                type={showConfirmPass ? "text" : "password"}
                required
                placeholder="Confirm Password"
                onChange={changeHandler}
                value={formData.confirmPassword}
                name="confirmPassword"
                className="bg-gray-700 text-gray-200 rounded-md w-full p-3 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            />
            <span onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer">
                {showConfirmPass ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
        </label>
    </div>

    <button className="bg-blue-600 hover:bg-blue-500 py-2 rounded-md mt-4 font-medium text-white transition duration-200 w-full">
        Create Account
    </button>
</form>

  );
};

export default SignupForm;
