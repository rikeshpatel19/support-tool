import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const StartPage = () => {
    const navigate = useNavigate();
    
    return (
        <div id="StudentDashboard" className="min-h-screen bg-gray-50 font-sans pb-24 flex flex-col items-center justify-center text-center">
            <h1 className='text-5xl mb-20'>Welcome to the 11+ Support Tool!</h1>
            <Button variant={"primary"} className=" text-2xl max-w-50 mb-10" onClick={() => navigate('/login')} >Login</Button>
            <p className="text-lg text-center text-gray-500 font-medium mt-6">
                Don't have an account? <span className="text-black underline cursor-pointer hover:text-blue-600" onClick={() => navigate('/register')}>Ask your Parent</span>
            </p>
        </div>
    )
}

export default StartPage;