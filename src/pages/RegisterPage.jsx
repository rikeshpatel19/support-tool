import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, UserPlus, Smile, Mail } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { registerUser } from '../services/api';

const RegisterPage = ({ setUser }) => {
  const navigate = useNavigate();
  // State for the error message
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous errors
    setError("");

    // 1. Client-side Validation: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match! Please try again.");
      return; // Stop the function here
    }

    try {
      // Extract only what the database needs
      const { firstName, surname, username, email, password } = formData;
      const userData = { firstName, surname, username, email, password };
      const newUser = await registerUser(userData);
      // Log the user in automatically by saving their ID
      localStorage.setItem("userID", newUser._id);
      // This updates the state in App.jsx
      if (setUser) setUser(newUser);
      // Send them to the dashboard
      navigate('/sd');
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords don't match!");
  //     return;
  //   }
  //   // TODO: Add real registration logic here
  //   console.log("Registering with:", formData);
  //   navigate('/sd');
  // };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6 pb-20">
      <div className="max-w-md w-full">

        <Card className="p-8">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-400 border-2 border-black rounded-full mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <UserPlus size={32} className="text-black" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Join the Team!</h1>
            <p className="text-gray-500 mt-2 font-medium">Create your student account below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* First Name */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 ml-1 text-sm">First Name</label>
              <div className="relative">
                <Smile className="absolute left-3 top-3.5 text-gray-500" size={20} />
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  className="input-field"
                  placeholder="e.g. John"
                  required
                />
              </div>
            </div>

            {/* Surname */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 ml-1 text-sm">Surname</label>
              <div className="relative">
                <Smile className="absolute left-3 top-3.5 text-gray-500" size={20} />
                <input
                  type="text"
                  name="surname"
                  onChange={handleChange}
                  className="input-field"
                  placeholder="e.g. Doe"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 ml-1 text-sm">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-gray-500" size={20} />
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Choose a username"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 ml-1 text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 ml-1 text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-500" size={20} />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block font-bold text-gray-900 mb-1 ml-1 text-sm">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-500" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            {/* Display Error Message */}
            {error && (
              <p className="text-red-500 font-bold text-sm text-center bg-red-50 p-2 rounded-lg border border-red-200">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button className="text-lg h-12 bg-green-500 hover:bg-green-600" onClick={handleSubmit}>Create Account</Button>
            </div>

            <p className="text-center text-gray-500 text-sm font-medium mt-4">
              Already have an account? <span onClick={() => navigate('/login')} className="text-black underline cursor-pointer hover:text-blue-600">Log in here</span>
            </p>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;