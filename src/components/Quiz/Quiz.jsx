import React from 'react';
import { Link } from 'react-router-dom';

class Quiz extends React.Component {
    render() {
        return (
            <div>
                <h1>Quiz</h1>
                <Link to="/">Homeへ</Link>
            </div>
        );
    }
}

export default Quiz;