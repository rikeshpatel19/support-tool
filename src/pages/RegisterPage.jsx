import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, UserPlus, Smile, Mail } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
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
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <Input
                label="First Name"
                name="firstName"
                icon={Smile}
                onChange={handleChange}
                placeholder="e.g. John"
              />

              {/* Surname */}
              <Input
                label="Surname"
                name="surname"
                icon={Smile}
                onChange={handleChange}
                placeholder="e.g. Doe"
              />
            </div>

            {/* Username */}
            <Input
              label="Username"
              name="username"
              icon={User}
              onChange={handleChange}
              placeholder="Choose a username"
            />

            {/* Email */}
            <Input
              label="Email"
              icon={Mail}
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="alex@example.com"
            />

            {/* Password */}
            <Input
              label="Password"
              icon={Lock}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="••••••••"
            />

            {/* Confirm Password */}
            <Input
              label="Confirm Password"
              icon={Lock}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
            />

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