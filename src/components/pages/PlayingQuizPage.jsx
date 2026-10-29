import Button from "../atoms/Button";
import ProgressBar from "../atoms/ProgressBar";
import QuestionCard from "../organisms/QuestionCard";

import QuizTemplate from "../templates/QuizTemplate";

export default function PlayingQuizPage({ currentIndex, maxQuestions, question, selectedAnswer, correctAnswer, userAnswers, isLastQuestion, handleSelect, handleNext }) {
    return (
        <QuizTemplate
            header={`Programming Quiz`}>
            <ProgressBar value={currentIndex + 1} max={maxQuestions} />
            <QuestionCard
                question={question}
                selected={selectedAnswer}
                locked={selectedAnswer !== null}
                correctAnswer={correctAnswer}
                onSelect={handleSelect}
                userAnswer={userAnswers[currentIndex]}
            />

            <Button onClick={handleNext} disabled={selectedAnswer === null}>
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </Button>
        </QuizTemplate>
    );
}
