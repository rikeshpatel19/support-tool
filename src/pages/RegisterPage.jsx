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
    studentName: '',
    parentName: '',
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

    // Client-side Validation: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Oops! Those passwords do not match! Please try again.");
      return; // Stop the function here
    }

    try {
      const userData = {
        studentName: formData.studentName,
        parentName: formData.parentName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      };
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
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6 pb-20">
      <div className="max-w-md w-full">

        <Card className="p-8">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-200 border-2 border-black rounded-full mb-4 shadow-medium">
              <UserPlus size={48} className="text-black" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Join the Team!</h1>
            <p className="text-gray-500 mt-2 font-medium">Create your student account below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Student Name */}
              <Input
                label="Student Name"
                name="studentName"
                icon={Smile}
                onChange={handleChange}
                placeholder="e.g. Rikesh"
              />

              {/* Parent Name */}
              <Input
                label="Parent Name"
                name="parentName"
                icon={Smile}
                onChange={handleChange}
                placeholder="e.g. Ghita"
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
              placeholder="rikesh@example.com"
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
              <p className="text-purple-400 font-bold text-sm text-center bg-purple-50 p-2 rounded-lg border border-purple-300">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button className="text-lg h-12 bg-green-500 hover:bg-green-600" onClick={handleSubmit}>Create Account</Button>
            </div>

            <p className="text-center text-gray-500 text-sm font-medium mt-4">
              Already have an account? <span onClick={() => navigate('/login')} className="text-black cursor-pointer hover:text-blue-600 hover:underline">Log in here</span>
            </p>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;