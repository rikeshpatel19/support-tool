import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LogOut, User, Mail, Cat, Dog, Bird, Check, Origami } from 'lucide-react';
// import { Butterfly } from 'phosphor-react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import { updateProfile } from '../services/api';

const AccountModal = ({ user, isOpen, onClose, onUserUpdate }) => {
    const navigate = useNavigate();
    // Stores the text input values for the form
    const [formData, setFormData] = useState({ username: '', email: '', avatar: '' });
    // Tracks which icon is currently selected
    const [selectedAvatar, setSelectedAvatar] = useState('Cat');
    // Controls which screen is visible, "menu" or "edit"
    const [view, setView] = useState('menu');

    // Sync form data when the user prop changes or modal opens
    useEffect(() => {
        if (user && isOpen) {
            // Fills the form with the users existing data from the database
            setFormData({
                username: user.username || '',
                email: user.email || ''
            });
            // Sets the avatar to the users current avatar 
            setSelectedAvatar(user.avatar || 'Cat');
            // Starts at "menu"
            setView('menu')
        }
    }, [user, isOpen]);

    if (!isOpen) return null;

    // Available avatars + properties
    const avatarMap = [
        { name: 'Cat', icon: Cat, color: 'fill-amber-400' },
        { name: 'Dog', icon: Dog, color: '' },
        { name: 'Bird', icon: Bird, color: '' },
        { name: 'Origami', icon: Origami, color: '' },
        // { name: 'Butterfly', icon: Butterfly, color: '' }
    ];

    // Updates formData whenever a student changes anything
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handles the "Save Changes" button click
    const handleUpdate = async () => {
        try {
            const userID = localStorage.getItem("userID");
            // Gets all the data required to update the database
            const updatedData = { ...formData, avatar: selectedAvatar };
            // Sends PATCH request to backend through the api
            const response = await updateProfile(userID, updatedData);
            // Call the parent update function to refresh UI globally
            if (onUserUpdate) onUserUpdate(response);
            // Success message
            console.log("Profile and Avatar updated successfully!");
            // Close the modal
            onClose();
        } catch (error) {
            // Flags any errors to the console
            console.error("Update failed", error);
        }
    };

    // Restores the form fields to match current database values
    const handleReset = () => {
        if (user) {
            // Reset the text fields
            setFormData({
                username: user.username || '',
                email: user.email || ''
            });
            // Reset the avatar selection
            setSelectedAvatar(user.avatar || 'Cat');
        }
    };

    // Deals with logging out of the system
    const handleLogOut = () => {
        // Navigate to start page
        navigate('/');
        // Clears the local session
        localStorage.removeItem("userID");
        // Success message
        console.log("Logged Out successfully");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="max-w-xl w-full relative">
                {/* X (Close) Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-red-500 border-4 border-black p-1 rounded-full z-10 hover:bg-red-600 transition-colors shadow-medium"
                >
                    <X size={20} className="text-white" strokeWidth={3} />
                </button>

                <Card>
                    {/* Dynamic Header */}
                    <h1 className='text-xl mb-3 font-bold'>{view === 'menu' ? "Account Settings" : "Edit Profile"}</h1>
                    {/* Menu View */}
                    {view === 'menu' && (
                        <div className="space-y-4 py-4">
                            {/* Edit Account Details Button */}
                            <Button
                                onClick={() => setView('edit')}
                                variant="primary"
                                className="w-75 justify-between h-14 text-lg"
                            >
                                Edit Account Details
                                <User size={20} />
                            </Button>
                            {/* Log Out Button */}
                            <Button
                                onClick={handleLogOut}
                                variant="red"
                                className="w-full justify-between h-14 text-lg"
                            >
                                Log Out
                                <LogOut size={20} />
                            </Button>
                        </div>
                    )}

                    {/* Account Details View */}
                    {view === 'edit' && (
                        <div className="space-y-6">
                            {/* Avatar Selection */}
                            <div>
                                <label className="block font-bold text-gray-900 mb-3 ml-1">Choose Avatar</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {avatarMap.map((item) => {
                                        const IconComponent = item.icon;
                                        const isSelected = selectedAvatar === item.name;
                                        return (
                                            <div
                                                key={item.name}
                                                onClick={() => setSelectedAvatar(item.name)}
                                                className={`relative flex flex-col items-center p-3 rounded-xl border-4 cursor-pointer transition-all
                                                ${isSelected
                                                        ? 'border-purple-600 bg-purple-50 scale-105'
                                                        : 'border-black bg-white hover:bg-gray-200'}`}
                                            >
                                                {/* Avatar Icon */}
                                                <div className={`p-2 rounded-full`}>
                                                    <IconComponent className={`${item.color}`} size={60} />
                                                </div>
                                                {/* Check Icon */}
                                                {isSelected && (
                                                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full p-1 border-2 border-black">
                                                        <Check size={16} strokeWidth={4} />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Input Fields */}
                            <div className="space-y-4">
                                {/* Username */}
                                <Input
                                    label="Username"
                                    name="username"
                                    value={formData.username}
                                    icon={User}
                                    onChange={handleChange}
                                    placeholder="Username"
                                />
                                {/* Email Address */}
                                <Input
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    icon={Mail}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                {/* Reset Button */}
                                <Button
                                    onClick={handleReset}
                                    variant="primary"
                                    className="flex-1 justify-center"
                                >
                                    Reset Changes
                                </Button>
                                {/* Save Button */}
                                <Button
                                    onClick={handleUpdate}
                                    variant="primary"
                                    className="flex-1 justify-center"
                                >
                                    Save Changes
                                </Button>
                            </div>
                            {/* Back Button */}
                            <Button
                                onClick={() => {
                                    handleReset();
                                    setView('menu');
                                }}
                                variant="primary"
                                className="flex-1 justify-center"
                            >
                                Back
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default AccountModal;