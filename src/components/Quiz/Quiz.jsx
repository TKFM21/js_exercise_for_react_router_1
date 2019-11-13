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
        let quizRender;
        if (this.state.quizzes.length) {
            quizRender = <h2>Quiz get.</h2>;
        } else {
            quizRender = <p>Now Loading...</p>
        }
        return (
            <div>
                <h1>Quiz</h1>
                {quizRender}
                <hr/>
                <Link to="/">Homeへ</Link>
            </div>
        );
    }
}

export default Quiz;