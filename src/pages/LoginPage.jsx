import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password); // firebase login
      toast.success("Logged in successfully!");
      navigate(from, { replace: true }); // redirect to desired page
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-xs mx-auto mt-20 space-y-4 p-6 bg-base-200 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-green-800 text-center mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input w-full"
        required
      />
      <button type="submit" className="btn btn-green w-full">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
