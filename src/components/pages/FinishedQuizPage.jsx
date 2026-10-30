import QuizTemplate from "../templates/QuizTemplate";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge"

import './FinishedQuizPage.css'

export default function FinishedQuizPage({ restartQuiz, score, maxQuestions }) {
    return (
        <QuizTemplate
            header={`Your final score`}>
            <div className="quiz-score">
                <Badge variant="result easy">{score} correct answers</Badge>
                <Badge variant="result hard">{maxQuestions - score} incorrect answers</Badge>

                {score < maxQuestions - score ? (
                    <p>You need to study much more to win! Keep trying</p>
                ) : (
                    <p>Well done!</p>
                )}

            </div>
            <Button onClick={() => restartQuiz()}>Restart Quiz</Button>
        </QuizTemplate>);
}
