import { shuffle } from './utils/shuffle.js'
import { programmingQuizQuestions } from './data/programming_quiz.js'
import Badge from './components/atoms/Badge.jsx'
import Button from './components/atoms/Button.jsx'

function App() {



  return (
    <>
      <main>
        <h1>Programming Quiz</h1>
        <Badge>Test</Badge>
        <Button onClick={() => console.log('Button clicked!')}>Click Me</Button>
      </main>
    </>
  )
}

export default App
