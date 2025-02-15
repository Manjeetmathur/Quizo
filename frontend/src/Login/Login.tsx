import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/user/login", { username, password });
      console.log(res)
      if (res.data.success) {
        navigate("/dashboard");
      }else{
      toast.error("invalid credentials")

      }
    } catch (err) {
      toast.error("invalid credentials")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
    <div className="bg-white p-8 rounded-xl shadow-xl w-80">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">🔐 Quizo Login</h1>
  
    
  
      <input
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
        placeholder="👤 Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
  
      <input
        type="password"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
        placeholder="🔑 Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
  
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg mt-2 shadow-md transition cursor-pointer "
        onClick={handleLogin}
      >
        🚀 Login
      </button>
  
    </div>
  </div>
  
  );
};

export default Login;
