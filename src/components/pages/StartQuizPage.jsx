import Button from "../atoms/Button";
import QuizTemplate from "../templates/QuizTemplate";
export default function StartQuizPage({ startQuiz }) {
    return (
        <QuizTemplate
            header={`Welcome to the Programming Quiz!`}>
            <Button onClick={() => startQuiz()}>Start Quiz</Button>
        </QuizTemplate>
    );
}
