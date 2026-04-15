import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-24 flex flex-col items-center justify-center text-center">
            <h1 className='text-5xl mb-20'>Oops! It seems like we cannot find that page.</h1>
            <p className="text-2xl text-black cursor-pointer hover:text-blue-600 hover:underline" onClick={() => navigate('/')}>Return to Start Page</p>
        </div>
    )
}

export default NotFoundPage;