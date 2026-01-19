import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const LoginPage = () => {
  const { loginUser, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return toast.error("Enter your email first!");
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center mt-20 px-4">
      <form
        onSubmit={handleLogin}
        className="card w-full max-w-sm bg-base-200 p-6 shadow-xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-green-700">Login</h1>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </span>
        </div>
        <p
          className="text-sm text-green-600 cursor-pointer hover:underline"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>
        <button className="btn btn-success w-full">Login</button>
        <button
          type="button"
          className="btn btn-outline w-full"
          onClick={handleGoogle}
        >
          <i className="fa-brands fa-google mr-2"></i> Login with Google
        </button>
        <p className="text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 font-semibold underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
