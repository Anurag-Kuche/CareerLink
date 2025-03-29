import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      login(email);
      navigate("/"); // Redirect to home after login
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
