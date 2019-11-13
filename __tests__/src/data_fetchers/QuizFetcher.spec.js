import QuizFetcher from '../../../src/data_fetchers/QuizFetcher';

describe('src/data_fetchers/QuizFetcher TEST', () => {
    describe('class method', () => {
        describe('fetch', () => {
            it('選択肢が4つのクイズオブジェクトが10件の配列で取得できる', async () => {
                const quizzes = await QuizFetcher.fetch();

                expect( Array.isArray(quizzes) ).toStrictEqual(true);
                expect( quizzes.length ).toStrictEqual(10);

                quizzes.forEach( quiz => {
                    expect( typeof quiz ).toStrictEqual('object');
                    expect( typeof quiz.question ).toStrictEqual('string');
                    expect( typeof quiz.correct_answer ).toStrictEqual('string');
                    expect( Array.isArray(quiz.incorrect_answers) ).toStrictEqual(true);
                    expect( quiz.incorrect_answers.length ).toStrictEqual(3);
                    quiz.incorrect_answers.forEach( answer => {
                        expect( typeof answer ).toStrictEqual('string');
                    });
                });
            });
        });
    });
});