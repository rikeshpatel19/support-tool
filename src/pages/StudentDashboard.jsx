import { useEffect, useState } from 'react';
import { getUser } from '../services/api';
import Button from '../components/Button'
import Card from '../components/Card';
import Span from '../components/Span';

function StudentDashboard() {
    const[isPressed, setIsPressed] = useState(false);

    return (
        <div id="StudentDashboard">
            <header class="bg-purple-500">Hello Rikesh</header>
            <nav class="flex flex-row bg-green-200">
                <ul></ul>
            </nav>
            {/* <img class="w-10 h-20"src="../src/img/125.png"></img> */}
            <footer class="bg-purple-300">Bye Rikesh</footer>
            <Button variant = "danger">Hello</Button>
            <ul className='grid grid-flow-col grid-cols-4'>
                <Card variant = "primary"></Card>
                <Card variant = "secondary"></Card>
                <Card variant = "primary"></Card>
                <Card variant = "secondary"></Card>
            </ul>
            <Button>Bye</Button>
            <Button variant='option_txt'><Span varaint='option_txt'>A</Span><span className="font-bold text-black text-lg">4</span></Button>
            <Button onClick={() => {
                console.log("Button clicked!"); 
                console.log("Current state is:", isPressed);
                setIsPressed(!isPressed);
            }} isSelected = {isPressed} variant = "q_select">21</Button>
        </div>
    )
}

export default StudentDashboard;