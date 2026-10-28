import './Button.css'
export default function Button({ children, onClick, disabled = false }) {
    return <button className="btn" onClick={onClick} disabled={disabled}>
        {children}
    </button>;
}
