import './AnswerOption.css'
export default function AnswerOption({ name, text, checked, status, disabled, onChange }) {
    return (
        <label className={`answer-option ${status}`}>
            <input
                type="radio"
                name={name}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            {text}
        </label>
    );
}
