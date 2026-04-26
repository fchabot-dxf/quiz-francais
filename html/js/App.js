import htm from 'https://unpkg.com/htm?module';
import { QUIZ_DATA } from './data/index.js';
import { 
    BookOpen, 
    CheckCircle2, 
    X, 
    ArrowRight, 
    RotateCcw, 
    Trophy, 
    ChevronRight, 
    Info, 
    ExternalLink, 
    GraduationCap,
    Pen,
    Check,
    Settings,
    XCircle 
} from './icons.js';

const html = htm.bind(React.createElement);
const { useState, useEffect } = React;

function App() {
    const [gameState, setGameState] = useState('welcome');
    const [categories, setCategories] = useState(['Orthographe', 'Lexique']);
    const [limit, setLimit] = useState(10);
    const [sessionQuestions, setSessionQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState([]);

    const currentQuestion = sessionQuestions[currentIndex];
    
    // Calculate total available questions for selected categories
    const availableQuestions = QUIZ_DATA.filter(q => categories.includes(q.category));
    const totalAvailable = availableQuestions.length;

    const LIMIT_OPTIONS = [5, 10, 15, 20, 30, 50, 9999];

    const shuffleArray = (array) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    const toggleCategory = (cat) => {
        if (categories.includes(cat)) {
            if (categories.length > 1) setCategories(categories.filter(c => c !== cat));
        } else {
            setCategories([...categories, cat]);
        }
    };

    const handleStartSession = () => {
        const filtered = QUIZ_DATA.filter(q => categories.includes(q.category));
        const shuffled = shuffleArray(filtered);
        const final = shuffled.slice(0, Math.min(limit, shuffled.length));
        
        setSessionQuestions(final);
        setCurrentIndex(0);
        setScore(0);
        setHistory([]);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setGameState('playing');
    };

    const handleAnswerSelect = (index) => {
        if (showFeedback) return;
        setSelectedAnswer(index);
        setShowFeedback(true);
        const isCorrect = index === currentQuestion.correctAnswer;
        if (isCorrect) setScore(s => s + 1);
        setHistory([...history, { question: currentQuestion, isCorrect, selected: index }]);
    };

    const handleNext = () => {
        if (currentIndex < sessionQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            setGameState('finished');
        }
    };

    const resetAll = () => {
        setGameState('welcome');
    };

    return html`
        <div className="app-container">
            <div className="max-width">
                ${/* WELCOME */ ''}
                ${gameState === 'welcome' && html`
                    <div className="card text-center animate-fade-in">
                        <div className="welcome-logo-container">
                            <img src="logoTecfeeTrans.png" alt="TECFÉE Logo" className="welcome-logo" />
                        </div>
                        <h2 className="welcome-title">Étude Personnalisée</h2>
                        <p className="welcome-desc">Configurez votre session de révision du TECFÉE.</p>
                        
                        <div className="mt-10" style=${{ textAlign: 'left' }}>
                            <p style=${{ fontSize: '12px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem' }}>Catégories à réviser</p>
                            <div style=${{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                ${['Orthographe', 'Syntaxe', 'Lexique', 'Ponctuation'].map(cat => html`
                                    <button 
                                        key=${cat}
                                        onClick=${() => toggleCategory(cat)}
                                        className="category-tag"
                                        style=${{ 
                                            cursor: 'pointer',
                                            background: categories.includes(cat) ? 'var(--primary)' : '#f1f5f9',
                                            color: categories.includes(cat) ? 'white' : '#64748b',
                                            border: 'none'
                                        }}
                                    >
                                        ${cat}
                                    </button>
                                `)}
                            </div>

                            <p style=${{ fontSize: '12px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem' }}>Nombre de questions</p>
                            <div style=${{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                ${LIMIT_OPTIONS.map(n => html`
                                    <button 
                                        key=${n}
                                        onClick=${() => setLimit(n)}
                                        className="progress-counter"
                                        style=${{ 
                                            cursor: 'pointer',
                                            background: limit === n ? 'var(--primary-light)' : 'white',
                                            borderColor: limit === n ? 'var(--primary)' : '#f1f5f9',
                                            color: limit === n ? 'var(--primary)' : '#64748b'
                                        }}
                                    >
                                        ${n === 9999 ? `Tout (${totalAvailable})` : n}
                                    </button>
                                `)}
                            </div>
                        </div>

                        <button onClick=${handleStartSession} className="btn-primary">
                            Lancer le quiz <${ChevronRight} size=${24} />
                        </button>
                    </div>
                `}

                ${/* PLAYING */ ''}
                ${gameState === 'playing' && html`
                    <div className="animate-fade-in">
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style=${{ width: `${((currentIndex) / sessionQuestions.length) * 100}%` }}></div>
                        </div>
                        <div className="card">
                            <div style=${{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div className="category-tag">${currentQuestion.category}</div>
                                <div style=${{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="progress-counter">${currentIndex + 1} / ${sessionQuestions.length}</div>
                                    <button onClick=${resetAll} className="abandon-btn" title="Abandonner le quiz">
                                        <${X} size=${16} strokeWidth=${4} />
                                    </button>
                                </div>
                            </div>
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
                                    ${currentIndex < sessionQuestions.length - 1 ? 'Question suivante' : 'Voir mon score'} 
                                    <${ArrowRight} size=${24} />
                                </button>
                            `}
                        </div>

                        <div className="mt-16">
                            <h3 style=${{ fontSize: '1rem', fontWeight: '800', color: '#1e1b4b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <${Info} size=${18} color="var(--primary)" />
                                Ressources officielles
                            </h3>
                            <div className="resources-grid">
                                <a href="https://vitrinelinguistique.oqlf.gouv.qc.ca/" target="_blank" className="resource-card">
                                    <div className="resource-title">La Vitrine linguistique (BDL)</div>
                                    <div className="resource-desc">Outil incontournable de l'OQLF pour toutes vos questions.</div>
                                    <${ExternalLink} size=${14} className="resource-icon" />
                                </a>
                                <a href="https://cefranc.csspi.ca/" target="_blank" className="resource-card">
                                    <div className="resource-title">CÉFRANC</div>
                                    <div className="resource-desc">Organisme officiel responsable du TECFÉE au Québec.</div>
                                    <${ExternalLink} size=${14} className="resource-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                `}

                ${/* FINISHED */ ''}
                ${gameState === 'finished' && html`
                    <div className="card text-center animate-fade-in">
                        <div className="result-icon-box"><${Trophy} size=${56} /></div>
                        <h2 className="welcome-title">Résultats</h2>
                        <div className="mt-10">
                            <div className="results-score">${score} <span>/ ${sessionQuestions.length}</span></div>
                            <p style=${{ color: '#64748b', fontWeight: 'bold', fontSize: '1.125rem' }}>
                                ${score === sessionQuestions.length ? "Parfait !" : "Continuez vos efforts !"}
                            </p>
                        </div>
                        <div className="mt-10" style=${{ maxHeight: '300px', overflowY: 'auto', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '1rem' }}>
                            ${history.map((item, idx) => html`
                                <div key=${idx} className="history-item">
                                    ${item.isCorrect 
                                        ? html`<${CheckCircle2} size=${20} color="#10b981" />` 
                                        : html`<${XCircle} size=${20} color="#ef4444" />`}
                                    <span className="history-text">Q${idx + 1}: ${item.question.topic}</span>
                                </div>
                            `)}
                        </div>
                        <button onClick=${resetAll} className="btn-primary mt-10" style=${{ background: '#0f172a' }}>
                            <${Settings} size=${24} /> Nouvelle session
                        </button>
                    </div>
                `}

                <footer className="mt-16 text-center">
                    <p style=${{ fontSize: '10px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>TECFÉE Expert • OQLF</p>
                </footer>
            </div>
        </div>
    `;
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
