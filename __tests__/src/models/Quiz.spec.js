import Quiz from '../../../src/models/Quiz';

const testData = {
    question: 'test question',
    correctAnswer: 'test correctAnswer',
    incorrectAnswers: [
        'bat 1',
        'bat 2',
        'bat 3'
    ]
};

describe('src/models/Quiz TEST', () => {
    describe('instance method', () => {
        describe('constructor', () => {
            it('ダミーデータでQuizインスタンス作成。インスタンスプロパティにダミーデータが格納', () => {
                const quiz = new Quiz(testData);

                expect( quiz instanceof Quiz ).toStrictEqual(true);
                expect( quiz._question ).toStrictEqual(testData.question);
                expect( quiz._correctAnswer ).toStrictEqual(testData.correctAnswer);
                expect( quiz._incorrectAnswers ).toStrictEqual(testData.incorrectAnswers);
            });
        });

        describe('getter', () => {
            it('questionとcorrectAnswerが取得できること', () => {
                const quiz = new Quiz(testData);

                expect( quiz.question ).toStrictEqual(testData.question);
                expect( quiz.correctAnswer ).toStrictEqual(testData.correctAnswer);
            });
        });

        describe('shuffledAnswers', () => {
            it('2つのシャッフルしたanswersを作成して異なることを確認', () => {
                const quiz = new Quiz(testData);
                const shuffle1 = quiz.shuffledAnswers();
                const shuffle2 = quiz.shuffledAnswers();

                expect( shuffle1 ).not.toStrictEqual( shuffle2 );
            });
        });
    });
    
    describe('class method', () => {
        describe('quizFetchAndCreateQuizInstances', () => {
            it('10件のQuizインスタンスの配列が取得できることを確認', async () => {
                const quizzes = await Quiz.quizFetchAndCreateQuizInstances();

                expect( Array.isArray(quizzes) ).toStrictEqual(true);
                expect( quizzes.length ).toStrictEqual(10);
                quizzes.forEach( quiz => {
                    expect( quiz instanceof Quiz ).toStrictEqual(true);
                });
            });
        });
    });
});