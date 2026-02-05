import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    
    return (
        <div id="StudentDashboard" className="min-h-screen bg-gray-50 font-sans pb-24">
            <button onClick={() => navigate('/login')} >Login</button>
        </div>
    )
}

export default StartPage;