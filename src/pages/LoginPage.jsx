import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import { Eye, EyeSlash } from 'phosphor-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { loginUser } from '../services/api';

const LoginPage = ({ setUser }) => {
   const navigate = useNavigate();
   // State for the error message
   const [error, setError] = useState("");
   // State to determine if password is showing 
   const [showPassword, setShowPassword] = useState(false);
   // Requires Commenting
   const [formData, setFormData] = useState({ username: '', password: '' });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      // Clear previous errors
      setError("");
      try {
         const userData = await loginUser({ username: formData.username, password: formData.password });
         localStorage.setItem("userID", userData._id);
         setUser(userData);
         navigate('/sd');
         console.log("Logged in as:", userData.username);
      } catch (error) {
         console.error(error);
         setError(error.message);
      }
   };

   return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
         <div className="max-w-md w-full">
            {/* Main Card */}
            <Card className="p-8">
               {/* Header */}
               <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-200 border-2 border-black rounded-full mb-4 shadow-medium">
                     <User size={48} className="text-black" />
                  </div>
                  <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back!</h1>
                  <p className="text-gray-500 mt-2 font-medium">Ready to continue your 11+ journey?</p>
               </div>

               {/* Form */}
               <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Username Field */}
                  <Input
                     label="Username"
                     name="username"
                     value={formData.username}
                     icon={User}
                     onChange={handleChange}
                     placeholder="Enter your username"
                  />

                  <div className="relative flex items-center">
                     {/* Password Field */}
                     <Input
                        label="Password"
                        icon={Lock}
                        type={showPassword ? "text" : "password"} // Switches between text and password
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                     />

                     {/* Visibility Button */}
                     <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 bottom-4.5 text-gray-500 hover:text-purple-500"
                     >
                        {showPassword ? (
                           <Eye size={20} weight="bold" /> // Icon when visible
                        ) : (
                           <EyeSlash size={20} weight="bold" /> // Icon when hidden
                        )}
                     </button>
                  </div>

                  {/* Display Error Message */}
                  {error && (
                     <p className="text-purple-400 font-bold text-sm text-center bg-purple-50 p-2 rounded-lg border border-purple-300">
                        {error}
                     </p>
                  )}

                  {/* Log In Button */}
                  <div className="pt-2">
                     <Button className="w-full justify-center text-lg h-12" onClick={handleSubmit}>Log In</Button>
                  </div>

                  <p className="text-center text-gray-500 text-sm font-medium mt-6">
                     Don't have an account? <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate('/register')}>Ask your Parent</span>
                  </p>
               </form>
            </Card>
         </div>
      </div>
   );
};

export default LoginPage;