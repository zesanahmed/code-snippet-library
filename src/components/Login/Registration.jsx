import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const Registration = () => {

  const [passMatch, setPassMatch] = useState(true);
    const {createUser,user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if(password !== confirm_password){
      setPassMatch(false);
    }

    console.log(email,password,confirm_password)

    if(password === confirm_password) {
      createUser(email, password);
    }
  }

  useEffect(() => {
    if(user){
      navigate(from,{replace:true});
    }
  },[user,from,navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-400 to-purple-500">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Create an Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400" 
            required />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400" 
            required />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Confirm Password</label>
            <input 
            type="password" 
            name="confirm_password" 
            placeholder="Confirm Password" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400" 
            required />
          </div>
          { !passMatch && (
          <div className="my-2">
            <p className="text-red-500">Password do not match!</p>
          </div>
        )
        }
          <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Register</button>
        </form>
        <p className="text-sm text-center text-gray-600">Already have an account? <a href="#" className="text-blue-600 hover:underline">Login</a></p>
      </div>
    </div>
  );
}

export default Registration;
