import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { loginUser } from '../services/api';

const LoginPage = ({ setUser }) => {
   const navigate = useNavigate();

   // Requires Commenting
   const [formData, setFormData] = useState({ username: '', password: '' });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const { username, password } = formData;
         const userData = await loginUser({ username, password });
         localStorage.setItem("userID", userData._id);
         setUser(userData);
         navigate('/sd');
         console.log("Logged in as:", userData.username);
      } catch (err) {
         console.error(err);
         alert("Login failed: " + err.message);
      }
   };

   return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">

         <div className="max-w-md w-full">
            {/* Main Card */}
            <Card className="p-8">

               {/* Header */}
               <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 border-2 border-black rounded-full mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                     <User size={32} className="text-black" />
                  </div>
                  <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back!</h1>
                  <p className="text-gray-500 mt-2 font-medium">Ready to continue your 11+ journey?</p>
               </div>

               {/* Form */}
               <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Username Field */}
                  <div>
                     <label className="block font-bold text-gray-900 mb-2 ml-1">Username</label>
                     <div className="relative">
                        <User className="absolute left-3 top-3.5 text-gray-500" size={20} />
                        <input
                           type="text"
                           name="username"
                           value={formData.username}
                           onChange={handleChange}
                           className="input-field"
                           placeholder="Enter your username"
                           required
                        />
                     </div>
                  </div>

                  {/* Password Field */}
                  <div>
                     <label className="block font-bold text-gray-900 mb-2 ml-1">Password</label>
                     <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-500" size={20} />
                        <input
                           type="password"
                           name="password"
                           value={formData.password}
                           onChange={handleChange}
                           className="input-field"
                           placeholder="••••••••"
                           required
                        />
                     </div>
                  </div>

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