import QuizFetcher from '../data_fetchers/QuizFetcher';
import _ from 'lodash';
import he from 'he';

class Quiz{
    constructor({ question, correctAnswer, incorrectAnswers }) {
        this._question = question;
        this._correctAnswer = correctAnswer;
        this._incorrectAnswers = incorrectAnswers;
    }

    get question() {
        return this._question;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    shuffledAnswers() {
        return _.shuffle([ this._correctAnswer, ...this._incorrectAnswers ]);
    }

    static async quizFetchAndCreateQuizInstances() {
        const quizzes = await QuizFetcher.fetch();
        return quizzes.map( quiz => {
            const quizData = {
                question: he.decode(quiz.question),
                correctAnswer: he.decode(quiz.correct_answer),
                incorrectAnswers: quiz.incorrect_answers.map( answer => he.decode(answer))
            };
            return new Quiz(quizData);
        });
    }
}

export default Quiz;