import AnswerOption from '../molecules/AnswerOption';
import './QuestionCard.css';


// Job: one complete question with its four answers and its feedback.
// ✔ Props: question, selected(the chosen answer, or null), locked(already answered ?), onSelect.
// ✔ Hint: use a fieldset as the container.If you set disabled on it, every radio inside is disabled at once.Also pass disabled = { locked } to every AnswerOption, so each one can change its own look.
// ✔ Hint: write a small function that decides the status of each answer: not locked is idle; the correct answer is correct; the one the user picked, if wrong, is wrong; the rest are idle.
// Hint: when locked, show a feedback line: "Correct!" or "The right answer was: ...".It is conditional rendering with && or a ternary.
// Hint: the card calls onSelect(question.id, answer), adding the id that AnswerOption does not know.
// Hint: use question.id in the name of the radios, so that two questions never share a group.

export default function QuestionCard({ question, selected, locked, onSelect, correctAnswer, userAnswer }) {

    return (
        <div className="question-card">

            <h2>{question.text}</h2>
            <fieldset className="answer-options">
                {question.options.map((answer) => (
                    <AnswerOption
                        key={answer}
                        name={`question-${question.id}`}
                        text={answer}
                        checked={selected === answer}
                        status={locked && answer === correctAnswer ? 'correct' : locked && answer !== correctAnswer ? 'incorrect' : 'idle'}
                        disabled={locked}
                        onChange={() => !locked && onSelect(answer)}
                    />
                ))}

            </fieldset>
            {locked && userAnswer !== correctAnswer && <>Incorrect! The correct answer was: {correctAnswer}</>}
            {locked && userAnswer === correctAnswer && <>Correct!</>}
        </div>
    );
}
