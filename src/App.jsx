import { programmingQuizQuestions } from './data/programming_quiz.js'
import Badge from './components/atoms/Badge.jsx'
import Button from './components/atoms/Button.jsx'
import ProgressBar from './components/atoms/ProgressBar.jsx'
import { buildQuiz } from './utils/buildQuiz.js'
import { useState } from 'react'
import QuestionCard from './components/organisms/QuestionCard.jsx'

// TODO
// Añadir pildora de dificultad
// ✅ Añadir feedback al seleccionar una respuesta (decir si la seleccionada es correcta, si no es correcta poner un texto con la respuesta correcta)
// Hacer componentes de las 3 fases
// Mejorar el UI

function App() {
  const maxQuestions = 5
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
      console.log('Quiz finished. User answers:', userAnswers)
      console.log('Correct answers:', questions.map(q => q.correct))
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

  return (
    <main>

      {phase === 'start' && (
        <>
          <h1>Welcome to the Programming Quiz!</h1>
          <Button onClick={() => startQuiz()}>Start Quiz</Button>
        </>
      )}

      {phase === 'playing' && (
        <>
          <h1>Programming Quiz</h1>
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
        </>
      )}

      {phase === 'finished' && (
        <>
          <h1>Quiz Finished!</h1>
          <p>Your score: {score}/{questions.length}</p>
          <Button onClick={() => restartQuiz()}>Restart Quiz</Button>
        </>
      )}
    </main>
  )
}

export default App
