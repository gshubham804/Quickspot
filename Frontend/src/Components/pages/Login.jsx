import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/authSlice";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setError("Invalid email address");
      return false;
    }

    // Basic password validation
    if (formValues.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    setError("");
    return true;
  };

  const handleLoginClick = () => {
    if (validateForm()) {
      try {
        dispatch(LoginUser(formValues));
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
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-6">
          Login
        </h2>

        {error && (
          <div className="bg-red-200 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

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
            value={formValues?.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
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
            value={formValues?.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </div>

        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <p className="mt-4 text-gray-600 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
