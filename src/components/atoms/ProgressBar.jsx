import './ProgressBar.css';

export default function ProgressBar({ value, max }) {
    return <div className="progress-bar">
        <div className="progress-bar__track">
            <div className="progress-bar__fill" style={{ width: `${(value / max) * 100}%` }}></div>
        </div>

        <span>Question {value} of {max}</span>
    </div>;
}
