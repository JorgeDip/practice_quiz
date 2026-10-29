import QuizTemplate from "../templates/QuizTemplate";
import Button from "../atoms/Button";
export default function FinishedQuizPage({ restartQuiz, score, maxQuestions }) {
    return (
        <QuizTemplate
            header={`Quiz Finished!`}>
            <p>Your score: {score}/{maxQuestions}</p>
            <Button onClick={() => restartQuiz()}>Restart Quiz</Button>
        </QuizTemplate>);
}
