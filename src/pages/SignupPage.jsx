import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const { createUser, updateUserProfile, googleLogin } = useAuth();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password)) return "Must contain one uppercase letter.";
    if (!/[a-z]/.test(password)) return "Must contain one lowercase letter.";
    return null;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const error = validatePassword();
    if (error) return toast.error(error);

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      toast.success("Account created!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Account created with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center mt-20 px-4">
      <form
        onSubmit={handleSignup}
        className="card w-full max-w-sm bg-base-200 p-6 shadow-xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-green-700">Register</h1>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Photo URL"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            className="input input-bordered w-full"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </span>
        </div>
        <button className="btn btn-success w-full">Register</button>
        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full"
        >
          <i className="fa-brands fa-google mr-2"></i> Sign Up with Google
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
