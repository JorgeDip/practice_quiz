import { programmingQuizQuestions } from '../../data/programming_quiz.js'
import { buildQuiz } from '../../utils/buildQuiz.js'

import { useState } from 'react'

import StartQuizPage from "./StartQuizPage.jsx";
import PlayingQuizPage from "./PlayingQuizPage.jsx";
import FinishedQuizPage from "./FinishedQuizPage.jsx";

// TODO
// ✔ Añadir pildora de dificultad
// ✔ Hacer componentes de las 3 fases
// ✔ Mejorar el UI
// Añadir feedback al seleccionar una respuesta (decir si la seleccionada es correcta, si no es correcta poner un texto con la respuesta correcta)


export default function QuizPage() {
    const maxQuestions = 20
    const [phase, setPhase] = useState('start') // start, playing, finished
    const [questions, setQuestions] = useState(buildQuiz(programmingQuizQuestions.questions, maxQuestions))
    const [currentIndex, setcurrentIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])

    const question = questions[currentIndex]
    const selectedAnswer = userAnswers[currentIndex] || null
    const correctAnswer = question.correct
    const isLastQuestion = currentIndex === questions.length - 1
    const score = userAnswers.filter((answer, index) => answer === questions[index].correct).length

    const handleSelect = (answer) => {
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentIndex] = answer
        setUserAnswers(newUserAnswers)
    }

    const handleNext = () => {
        if (!isLastQuestion) {
            setcurrentIndex(currentIndex + 1)
        } else {
            setPhase('finished')
        }
    }

    const startQuiz = () => {
        setPhase('playing')
    }

    const restartQuiz = () => {
        setQuestions(buildQuiz(programmingQuizQuestions.questions, maxQuestions))
        setcurrentIndex(0)
        setUserAnswers([])
        setPhase('start')
    }
    return <>
        {phase === 'start' && <StartQuizPage startQuiz={startQuiz} />}

        {phase === 'playing' && (
            <PlayingQuizPage
                currentIndex={currentIndex}
                maxQuestions={maxQuestions}
                question={question}
                selectedAnswer={selectedAnswer}
                correctAnswer={correctAnswer}
                userAnswers={userAnswers}
                isLastQuestion={isLastQuestion}
                handleNext={handleNext}
                handleSelect={handleSelect} />)}

        {phase === 'finished' && <FinishedQuizPage restartQuiz={restartQuiz} score={score}
            maxQuestions={questions.length} />}

    </>;
}
