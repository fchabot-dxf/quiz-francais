import htm from 'https://unpkg.com/htm?module';
import { QUIZ_DATA } from './data/index.js';
import { 
    BookOpen, 
    CheckCircle2, 
    XCircle, 
    ArrowRight, 
    RotateCcw, 
    Trophy, 
    ChevronRight, 
    Info, 
    ExternalLink, 
    BrainCircuit 
} from './icons.js';

const html = htm.bind(React.createElement);
const { useState } = React;

function App() {
    const [gameState, setGameState] = useState('welcome');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState([]);

    const currentQuestion = QUIZ_DATA[currentQuestionIndex];

    const handleStart = () => {
        setGameState('playing');
        setCurrentQuestionIndex(0);
        setScore(0);
        setHistory([]);
        setSelectedAnswer(null);
        setShowFeedback(false);
    };

    const handleAnswerSelect = (index) => {
        if (showFeedback) return;
        setSelectedAnswer(index);
        setShowFeedback(true);
        const isCorrect = index === currentQuestion.correctAnswer;
        if (isCorrect) setScore(s => s + 1);
        setHistory([...history, { questionId: currentQuestion.id, isCorrect, selected: index }]);
    };

    const handleNext = () => {
        if (currentQuestionIndex < QUIZ_DATA.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            setGameState('finished');
        }
    };

    return html`
        <div className="app-container">
            <div className="max-width">
                <header className="header">
                    <div className="logo-group">
                        <div className="logo-icon"><${BrainCircuit} size=${24} /></div>
                        <div className="logo-text">
                            <h1>TECFÉE Expert</h1>
                            <div className="logo-badge">Norme BDL / OQLF</div>
                        </div>
                    </div>
                    ${gameState === 'playing' && html`
                        <div className="progress-counter">${currentQuestionIndex + 1} / ${QUIZ_DATA.length}</div>
                    `}
                </header>

                ${gameState === 'welcome' && html`
                    <div className="card text-center animate-fade-in">
                        <div className="welcome-icon-box"><${BookOpen} size=${48} /></div>
                        <h2 className="welcome-title">Prêt pour la réussite ?</h2>
                        <p className="welcome-desc">Optimisez votre préparation au <strong>TECFÉE</strong> avec des justifications basées sur la Banque de dépannage linguistique.</p>
                        <button onClick=${handleStart} className="btn-primary">
                            Démarrer le quiz <${ChevronRight} size=${24} />
                        </button>
                    </div>
                `}

                ${gameState === 'playing' && html`
                    <div className="animate-fade-in">
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style=${{ width: `${((currentQuestionIndex) / QUIZ_DATA.length) * 100}%` }}></div>
                        </div>
                        <div className="card">
                            <div className="category-tag">${currentQuestion.category}</div>
                            <h3 className="question-text">${currentQuestion.question}</h3>
                            <div className="options-list">
                                ${currentQuestion.options.map((option, idx) => {
                                    const statusClass = showFeedback 
                                        ? (idx === currentQuestion.correctAnswer ? 'correct' : (idx === selectedAnswer ? 'wrong' : 'disabled')) 
                                        : (selectedAnswer === idx ? 'selected' : '');
                                    
                                    return html`
                                        <button key=${idx} disabled=${showFeedback} onClick=${() => handleAnswerSelect(idx)} className=${`option-btn ${statusClass}`}>
                                            <span>${option}</span>
                                            ${showFeedback && (idx === currentQuestion.correctAnswer 
                                                ? html`<${CheckCircle2} size=${24} />` 
                                                : (idx === selectedAnswer ? html`<${XCircle} size=${24} />` : null))}
                                        </button>
                                    `;
                                })}
                            </div>

                            ${showFeedback && html`
                                <div className="feedback-box animate-fade-in">
                                    <div className="feedback-header">
                                        <div className="feedback-icon" style=${{ 
                                            background: selectedAnswer === currentQuestion.correctAnswer ? '#d1fae5' : '#fef3c7', 
                                            color: selectedAnswer === currentQuestion.correctAnswer ? '#059669' : '#d97706' 
                                        }}>
                                            <${Info} size=${24} />
                                        </div>
                                        <div className="feedback-content">
                                            <p className="label">Justification BDL</p>
                                            <p className="feedback-text">${currentQuestion.explanation}</p>
                                            <a href=${currentQuestion.bdlLink} target="_blank" rel="noopener noreferrer" className="bdl-link">
                                                Consulter l'article officiel <${ExternalLink} size=${16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `}

                            ${showFeedback && html`
                                <button onClick=${handleNext} className="btn-primary mt-10">
                                    ${currentQuestionIndex < QUIZ_DATA.length - 1 ? 'Question suivante' : 'Voir mon score'} 
                                    <${ArrowRight} size=${24} />
                                </button>
                            `}
                        </div>
                    </div>
                `}

                ${gameState === 'finished' && html`
                    <div className="card text-center animate-fade-in">
                        <div className="welcome-icon-box" style=${{ background: '#fffbeb', color: '#f59e0b' }}><${Trophy} size=${56} /></div>
                        <h2 className="welcome-title">Quiz Terminé !</h2>
                        <div className="mt-10">
                            <div className="results-score">${score} <span>/ ${QUIZ_DATA.length}</span></div>
                            <p style=${{ color: '#64748b', fontWeight: 'bold', fontSize: '1.125rem' }}>
                                ${score === QUIZ_DATA.length ? "Performance exceptionnelle !" : "Bon travail, continuez ainsi !"}
                            </p>
                        </div>
                        <div className="mt-10">
                            ${history.map((item, idx) => html`
                                <div key=${idx} className="history-item">
                                    ${item.isCorrect 
                                        ? html`<${CheckCircle2} size=${20} color="#10b981" />` 
                                        : html`<${XCircle} size=${20} color="#ef4444" />`}
                                    <span className="history-text">Question ${idx + 1}: ${QUIZ_DATA[idx].topic}</span>
                                </div>
                            `)}
                        </div>
                        <button onClick=${handleStart} className="btn-primary mt-10" style=${{ background: '#0f172a' }}>
                            <${RotateCcw} size=${24} /> Recommencer
                        </button>
                    </div>
                `}

                <footer className="mt-16 text-center">
                    <p style=${{ fontSize: '10px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Aide à l'étude • TECFÉE</p>
                    <p style=${{ fontSize: '12px', color: '#94a3b8', maxWidth: '280px', margin: '0 auto' }}>Ce projet simule les justifications pédagogiques de la BDL. Toujours consulter les sources officielles.</p>
                </footer>
            </div>
        </div>
    `;
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
