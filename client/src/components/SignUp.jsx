/* eslint-disable no-unused-vars */
import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import {
  BUTTONCLASSES,
  FIELDS,
  Inputwrapper,
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
} from "../assets/dummy";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM = {
  name: "",
  email: "",
  password: "",
};

function SignUp({ onSwitchMode }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/users/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Signup success:", response.data);

      setMessage({
        text: "🎉 Registration successful! Redirecting to login...",
        type: "success",
      });

      setFormData(INITIAL_FORM);

      // 1.5s ka delay deke login page pe bhejna
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      console.error("❌ Signup error:", error.response?.data || error.message);
      setMessage({
        text:
          error.response?.data?.message ||
          "⚠️ An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-white shadow-lg border border-green-100 rounded-xl p-8">
      <div className="mb-6 text-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-green-500 
         rounded-full mx-auto flex items-center justify-center mb-3"
        >
          <UserPlus className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Create an account</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Sign up to get started with your task management journey
        </p>
      </div>

      {message.text && (
        <div
          className={
            message.type === "success" ? MESSAGE_SUCCESS : MESSAGE_ERROR
          }
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {FIELDS.map(({ name, type, placeholder, icon: Icon }) => (
          <div key={name} className={Inputwrapper}>
            <Icon className="text-green-500 w-5 h-5 mr-2" />
            <input
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={(e) =>
                setFormData({ ...formData, [name]: e.target.value })
              }
              className="w-full focus:outline-none text-sm text-gray-700"
              required
            />
          </div>
        ))}

        <button type="submit" className={BUTTONCLASSES} disabled={loading}>
          {loading ? (
            "Signing Up..."
          ) : (
            <>
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <button
          onClick={onSwitchMode}
          className="text-green-600 hover:text-green-700 hover:underline font-medium transition-colors cursor-pointer"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignUp;
