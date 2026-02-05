import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, UserPlus, Hash, Smile } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // TODO: Add real registration logic here
    console.log("Registering with:", formData);
    navigate('/sd');
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