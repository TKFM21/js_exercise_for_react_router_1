import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <Link to="/quiz/"><Button>Quizへ</Button></Link>
        </div>
    );
}

export default Home;