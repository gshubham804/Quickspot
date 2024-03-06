import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/authSlice";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    // Basic username validation
    if (formValues.username.trim() === "") {
      setError("Username cannot be empty");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setError("Invalid email address");
      return;
    }

    // Basic password validation
    if (formValues.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Confirm password validation
    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    return true;
  };

  const handleSignupClick = () => {
    if (validateForm()) {
      try {
        dispatch(registerUser(formValues));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormValues((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="h-auto py-4 md:py-0 lg:py-0 md:min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        {error && (
          <div className="bg-red-200 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="john_doe"
            value={formValues.username}
            onChange={(e) => handleInputChange("username",e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="john.doe@example.com"
            value={formValues.email}
            onChange={(e) => handleInputChange("email",e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="********"
            value={formValues.password}
            onChange={(e) => handleInputChange("password",e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            placeholder="********"
            value={formValues.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword",e.target.value)}
          />
        </div>

        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
          onClick={handleSignupClick}
        >
          Sign Up
        </button>
        <p className="mt-4 text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-red-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
