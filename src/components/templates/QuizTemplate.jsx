import './QuizTemplate.css'
export default function QuizTemplate({ children, header }) {
    return <>
        <main>
            <h1>{header}</h1>
            {children}
        </main>
    </>;
}
