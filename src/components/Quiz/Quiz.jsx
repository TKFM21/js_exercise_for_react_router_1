import React from 'react';
import { Link } from 'react-router-dom';
import QuizModel from '../../models/Quiz';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            numberOfCorrected: 0,
            quizzes: [],
        };
    }

    async componentDidMount() {
        await this.quizFetch();
    }

    async quizFetch() {
        this.setState({
            currentIndex: 0,
            numberOfCorrected: 0,
            quizzes: [],
        });
        const quizzes = await QuizModel.quizFetchAndCreateQuizInstances();
        this.setState({ quizzes });
    }

    render() {
        const { quizzes, currentIndex } = this.state;
        if (!quizzes.length && !currentIndex) {
            return this.loadingRender();
        }
        if (quizzes.length > 0 && currentIndex < quizzes.length - 1) {
            const quiz = quizzes[currentIndex];
            return this.quizRender(quiz);
        }
        return <h1>Another State</h1>;
    }

    loadingRender() {
        return (
            <div>
                <h1>Quiz</h1>
                <p>Now Loading...</p>
                <hr/>
                <Link to="/">Homeへ</Link>
            </div>
        );
    }

    quizRender(quiz) {
        const answers = quiz.shuffledAnswers().map( (answer, index) => {
            return (
                <li key={ index }>{ answer }</li>
            );
        });
        return (
            <div>
                <h1>Quiz</h1>
                <h2>{ quiz.question }</h2>
                <ul>{ answers }</ul>
                <hr/>
                <Link to="/">Homeへ</Link>
            </div>
        );
    }
}

export default Quiz;