import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, UserPlus, Smile, Mail } from 'lucide-react';
import { Eye, EyeSlash } from 'phosphor-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { registerUser } from '../services/api';

const RegisterPage = ({ setUser }) => {
  const navigate = useNavigate();
  // State to determine if password is showing 
  const [showPassword, setShowPassword] = useState(false);
  // State to determine if confirm password is showing 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // State for the error message
  const [errorMessage, setErrorMessage] = useState("");
  // State to store data from input fields
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  // State to check if the user has submitted the form data
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Updates formData whenever anything is typed in the input fields
  const handleChange = (event) => {
    // Only the field that changed is overwritten
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (errorMessage) setErrorMessage(""); // Clear previous errors
  };

  const handleSubmit = async (event) => {
    // Used to prevent double submits
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Prevents default form behaviour (refreshing the page)
    event.preventDefault();
    // Clear previous errors
    setErrorMessage("");

    // Client-side Validation: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Oops! Those passwords do not match! Please try again.");
      setIsSubmitting(false);
      return; // Stop the function here
    }

    const userData = {
      studentName: formData.studentName,
      parentName: formData.parentName,
      username: formData.username,
      email: formData.email,
      password: formData.password
    };
    const userResponse = await registerUser(userData);
    const newUser = userResponse.data;
    if (userResponse.error) {
      setErrorMessage(userResponse.error);
      setIsSubmitting(false);
      return;
    }
    // Log the user in automatically by saving their ID
    localStorage.setItem("userID", newUser._id);
    // This updates the state in App.jsx
    if (setUser) setUser(newUser);
    // Send them to the dashboard
    navigate('/sd');
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6 pb-20">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <Card className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-200 border-2 border-black rounded-full mb-4 shadow-medium">
              <UserPlus size={48} className="text-black" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Join the Team!</h1>
            <p className="text-gray-500 mt-2 font-medium">Create your student account below.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
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
              autoComplete="username"
              placeholder="Choose a username"
            />

            {/* Email */}
            <Input
              label="Email"
              icon={Mail}
              type="email"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              placeholder="rikesh@example.com"
            />

            <div className="relative flex items-center">
              {/* Password */}
              <Input
                label="Password"
                icon={Lock}
                type={showPassword ? "text" : "password"} // Switches between text and password
                name="password"
                onChange={handleChange}
                autoComplete="new-password"
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

            <div className="relative flex items-center">
              {/* Confirm Password */}
              <Input
                label="Confirm Password"
                icon={Lock}
                type={showConfirmPassword ? "text" : "password"} // Switches between text and password
                name="confirmPassword"
                onChange={handleChange}
                autoComplete="new-password"
                placeholder="Re-enter Password"
              />

              {/* Visibility Button */}
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 bottom-4.5 text-gray-500 hover:text-purple-500"
              >
                {showConfirmPassword ? (
                  <Eye size={20} weight="bold" /> // Icon when visible
                ) : (
                  <EyeSlash size={20} weight="bold" /> // Icon when hidden
                )}
              </button>
            </div>

            {/* Display Error Message */}
            {errorMessage && (
              <p className="text-purple-400 font-bold text-sm text-center bg-purple-50 p-2 rounded-lg border border-purple-300">
                {errorMessage}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button className="text-lg h-12 bg-green-500 hover:bg-green-600" disabled={isSubmitting}>Create Account</Button>
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