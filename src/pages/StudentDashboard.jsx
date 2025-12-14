import { useEffect, useState } from 'react';
import { getUser } from '../services/api';
import Button from '../components/Button'

function StudentDashboard() {
    return (
        <div id="StudentDashboard">
            <header class="bg-purple-500">Hello Rikesh</header>
            <nav class="flex flex-row bg-green-200">
                <ul></ul>
            </nav>
            <body class="flex-col bg-blue-300 w-100px h-100px"></body>
            <img class="w-10 h-20"src="../src/img/125.png"></img>
            <footer class="bg-purple-300">Bye</footer>
            <Button variant = "danger">Hello</Button>
            
            <Button>Bye</Button>
        </div>
    )
}

export default StudentDashboard;