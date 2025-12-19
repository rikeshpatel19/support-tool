import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/api';
import Button from '../components/Button'
import Card from '../components/Card';
import Span from '../components/Span';

const StudentDashboard = () => {
    const navigate = useNavigate();

    return (
        <div id="StudentDashboard">
            <h1>Student Dashboard</h1>
            <button onClick={() => navigate('/subject/maths')}>Go to Maths Page</button> <br></br>
            <button onClick={() => navigate('/subject/english')}>Go to English Page</button> <br></br>
            <button onClick={() => navigate('/subject/verbal_reasoning')}>Go to VR Page</button> <br></br>
            <button onClick={() => navigate('/subject/non_verbal_reasoning')}>Go to NVR Page</button> <br></br>

            <button onClick={() => navigate('/')}>Go to Home Page</button> <br></br>
            <button onClick={() => console.log("Test")}>Go to Test Page</button> <br></br>
            <button onClick={() => console.log("Shop")}>Go to Shop Page</button> <br></br>
            <button onClick={() => navigate('/shelf')}>Go to Shelf Page</button> <br></br>
            <button onClick={() => console.log("Parent Zone")}>Go to Parent Zone Page</button>
        </div>
    )
}

export default StudentDashboard;