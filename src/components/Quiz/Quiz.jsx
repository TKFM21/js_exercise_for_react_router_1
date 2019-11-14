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
        this.quizFetch = this.quizFetch.bind(this);
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

    judgeAndNextQuiz(quiz, answer) {
        let { numberOfCorrected, currentIndex } = this.state;
        if (quiz.correctAnswer === answer) {
            numberOfCorrected++;
            window.alert('正解！！');
        } else {
            window.alert(`間違い！！ 正解は：${quiz.correctAnswer}`);
        }
        currentIndex++;
        this.setState({ numberOfCorrected, currentIndex });
    }

    render() {
        const { quizzes, currentIndex, numberOfCorrected } = this.state;
        if (!quizzes.length && !currentIndex) {
            // Loading画面へ
            return this.loadingRender();
        }
        if (quizzes.length > 0 && currentIndex < quizzes.length - 1) {
            const quiz = quizzes[currentIndex];
            // クイズ表示画面へ
            return this.quizRender(quiz);
        }
        return (
            <div>
                <h1>Quiz</h1>
                <h2>Result</h2>
                <h3>{numberOfCorrected}/{quizzes.length}</h3>
                <h3><button onClick={this.quizFetch}>Restart</button></h3>
                <hr/>
                <Link to="/">Homeへ</Link>
            </div>
        );
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
                <li
                    key={ index }
                    onClick={ () => this.judgeAndNextQuiz(quiz, answer) }
                >
                    { answer }
                </li>
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