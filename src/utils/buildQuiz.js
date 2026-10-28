import { shuffle } from './shuffle.js';

export function buildQuiz(questions, amount = 10) {
  const shuffledQuestions = shuffle(questions); // Shuffle the questions array
  // Slice the shuffled array to get the desired amount of questions
  return shuffledQuestions.slice(0, amount).map((question) => {
    const shuffledAnswers = shuffle(question.options); // shuffle the answers for each question
    return {
      ...question,
      options: shuffledAnswers,
    };
  });
}
